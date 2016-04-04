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
	
	public Run() {
		injector = new ClassDiagramStandaloneSetup().createInjectorAndDoEMFRegistration();
		
		resourceSet = injector.getInstance(XtextResourceSet.class);
		resourceSet.addLoadOption(XtextResource.OPTION_RESOLVE_ALL, Boolean.TRUE);
	}
	
	public void load() throws Exception {
		final File folder = new File(".");
		final String[] files = folder.list();
		
		for(String file: files) {
			if(file.endsWith("cduml")) {
				out.println("LOAD: " + file);
				final XtextResource resource = (XtextResource) resourceSet.createResource(URI.createURI("file:/" + file));
				try(FileInputStream in = new FileInputStream(file)) {
					resource.load(in, resourceSet.getLoadOptions());
					loaded.put(file, resource);
				}
			}
		}
	}
	
	public void parseAll() throws Exception {
		for(String name: loaded.keySet()) {
			out.println("PARSE: " + name);
			parse(loaded.get(name));
		}
	}
	
	public void parse(XtextResource resource) throws Exception {
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
					final String path = "json/"  + fileName;
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
		run.load();
		run.parseAll();
	}
}
