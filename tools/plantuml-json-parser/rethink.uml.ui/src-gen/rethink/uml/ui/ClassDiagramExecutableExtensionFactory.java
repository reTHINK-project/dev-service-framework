/*
 * generated by Xtext
 */
package rethink.uml.ui;

import org.eclipse.xtext.ui.guice.AbstractGuiceAwareExecutableExtensionFactory;
import org.osgi.framework.Bundle;

import com.google.inject.Injector;

import rethink.uml.ui.internal.ClassDiagramActivator;

/**
 * This class was generated. Customizations should only happen in a newly
 * introduced subclass. 
 */
public class ClassDiagramExecutableExtensionFactory extends AbstractGuiceAwareExecutableExtensionFactory {

	@Override
	protected Bundle getBundle() {
		return ClassDiagramActivator.getInstance().getBundle();
	}
	
	@Override
	protected Injector getInjector() {
		return ClassDiagramActivator.getInstance().getInjector(ClassDiagramActivator.RETHINK_UML_CLASSDIAGRAM);
	}
	
}
