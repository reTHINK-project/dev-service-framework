package rethink.uml;

import static java.lang.System.out;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.emf.common.util.URI;
import org.eclipse.xtext.generator.IFileSystemAccess;
import org.eclipse.xtext.nodemodel.INode;
import org.eclipse.xtext.resource.XtextResource;
import org.eclipse.xtext.resource.XtextResourceSet;

import rethink.uml.generator.ClassDiagramGenerator;

import com.google.inject.Injector;

public class Run {
	final Injector injector;
	final XtextResourceSet resourceSet;

	final Map<String, XtextResource> loaded = new HashMap<>();
	final Map<String, String> targets = new HashMap<>(); //target folders
	
	public Run() {
		injector = new ClassDiagramStandaloneSetup().createInjectorAndDoEMFRegistration();
		
		resourceSet = injector.getInstance(XtextResourceSet.class);
		resourceSet.addLoadOption(XtextResource.OPTION_RESOLVE_ALL, Boolean.TRUE);
	}
	
	public void loadAll() throws Exception {
		final File folder = new File(".");
		load(folder, "");
	}
	
	public void load(File folder, String targetFolder) throws Exception {
		out.println("SEARCH-FOLDER: " + targetFolder);
		final File[] files = folder.listFiles();
		
		for(File file: files) {
			final String fileName = file.getName();
			final String filePath = targetFolder + "/" + fileName;
			
			if(file.isFile() && fileName.endsWith("cduml")) {
				out.println("LOAD: " + filePath);
				final XtextResource resource = (XtextResource) resourceSet.createResource(URI.createURI("file:" + filePath));
				try(FileInputStream in = new FileInputStream(file)) {
					resource.load(in, resourceSet.getLoadOptions());
					loaded.put(filePath, resource);
					targets.put(filePath, targetFolder);
				}
			} else if(file.isDirectory()) {
				load(file, targetFolder + "/" + fileName);
			}
		}
	}
	
	public void parseAll() throws Exception {
		for(String name: loaded.keySet()) {
			out.println("PARSE: " + name);
			parse(loaded.get(name), targets.get(name));
		}
	}
	
	public void parse(XtextResource resource, String targetFolder) throws Exception {
		//syntax errors...
		for(INode node: resource.getParseResult().getSyntaxErrors()) {
			out.println("ERROR AT LINE " + node.getStartLine() + " -> " + node.getSyntaxErrorMessage().getMessage());
		}
		
		//generate if no syntax errors
		if(!resource.getParseResult().hasSyntaxErrors()) {
			final ClassDiagramGenerator gen = new ClassDiagramGenerator();
			injector.injectMembers(gen);
			
			gen.doGenerate(resource, new IFileSystemAccess() {
				
				@Override
				public void generateFile(String fileName, String outputConfigurationName, CharSequence contents) {
					out.println("outputConfigurationName: " + outputConfigurationName);
					generateFile(fileName, contents);
				}
				
				@Override
				public void generateFile(String fileName, CharSequence contents) {
					final String path = "json-schema"  + targetFolder + "/" + fileName;
					out.print("  " + path);
					
					final File file = new File(path);
					final File dir = file.getParentFile();
					if(dir != null) {
						dir.mkdirs();
					}

					try(Writer writer = new PrintWriter(new FileOutputStream(file))) {
						writer.append(contents);
						writer.flush();
					} catch (IOException e) {
						e.printStackTrace();
					}
					out.println(" -> OK");
				}
				
				@Override
				public void deleteFile(String fileName) {
					new File(fileName).delete();
				}
			});
		}
	}
	
	public static void main(String[] args) throws Exception {
		final Run run = new Run();
		run.loadAll();
		run.parseAll();
	}
}
