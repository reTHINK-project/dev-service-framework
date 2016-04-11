/**
 */
package rethink.uml.classDiagram.util;

import org.eclipse.emf.common.notify.Adapter;
import org.eclipse.emf.common.notify.Notifier;

import org.eclipse.emf.common.notify.impl.AdapterFactoryImpl;

import org.eclipse.emf.ecore.EObject;

import rethink.uml.classDiagram.*;

/**
 * <!-- begin-user-doc -->
 * The <b>Adapter Factory</b> for the model.
 * It provides an adapter <code>createXXX</code> method for each class of the model.
 * <!-- end-user-doc -->
 * @see rethink.uml.classDiagram.ClassDiagramPackage
 * @generated
 */
public class ClassDiagramAdapterFactory extends AdapterFactoryImpl
{
  /**
   * The cached model package.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected static ClassDiagramPackage modelPackage;

  /**
   * Creates an instance of the adapter factory.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public ClassDiagramAdapterFactory()
  {
    if (modelPackage == null)
    {
      modelPackage = ClassDiagramPackage.eINSTANCE;
    }
  }

  /**
   * Returns whether this factory is applicable for the type of the object.
   * <!-- begin-user-doc -->
   * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
   * <!-- end-user-doc -->
   * @return whether this factory is applicable for the type of the object.
   * @generated
   */
  @Override
  public boolean isFactoryForType(Object object)
  {
    if (object == modelPackage)
    {
      return true;
    }
    if (object instanceof EObject)
    {
      return ((EObject)object).eClass().getEPackage() == modelPackage;
    }
    return false;
  }

  /**
   * The switch that delegates to the <code>createXXX</code> methods.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected ClassDiagramSwitch<Adapter> modelSwitch =
    new ClassDiagramSwitch<Adapter>()
    {
      @Override
      public Adapter caseDomainModel(DomainModel object)
      {
        return createDomainModelAdapter();
      }
      @Override
      public Adapter caseElement(Element object)
      {
        return createElementAdapter();
      }
      @Override
      public Adapter caseNode(Node object)
      {
        return createNodeAdapter();
      }
      @Override
      public Adapter caseEntity(Entity object)
      {
        return createEntityAdapter();
      }
      @Override
      public Adapter caseCPackage(CPackage object)
      {
        return createCPackageAdapter();
      }
      @Override
      public Adapter caseRelation(Relation object)
      {
        return createRelationAdapter();
      }
      @Override
      public Adapter caseRelationParse(RelationParse object)
      {
        return createRelationParseAdapter();
      }
      @Override
      public Adapter caseRelationType(RelationType object)
      {
        return createRelationTypeAdapter();
      }
      @Override
      public Adapter caseEnumer(Enumer object)
      {
        return createEnumerAdapter();
      }
      @Override
      public Adapter caseClazz(Clazz object)
      {
        return createClazzAdapter();
      }
      @Override
      public Adapter caseProperty(Property object)
      {
        return createPropertyAdapter();
      }
      @Override
      public Adapter caseEntityList(EntityList object)
      {
        return createEntityListAdapter();
      }
      @Override
      public Adapter caseNote(Note object)
      {
        return createNoteAdapter();
      }
      @Override
      public Adapter caseDataType(DataType object)
      {
        return createDataTypeAdapter();
      }
      @Override
      public Adapter defaultCase(EObject object)
      {
        return createEObjectAdapter();
      }
    };

  /**
   * Creates an adapter for the <code>target</code>.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param target the object to adapt.
   * @return the adapter for the <code>target</code>.
   * @generated
   */
  @Override
  public Adapter createAdapter(Notifier target)
  {
    return modelSwitch.doSwitch((EObject)target);
  }


  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.DomainModel <em>Domain Model</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.DomainModel
   * @generated
   */
  public Adapter createDomainModelAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Element <em>Element</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Element
   * @generated
   */
  public Adapter createElementAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Node <em>Node</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Node
   * @generated
   */
  public Adapter createNodeAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Entity <em>Entity</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Entity
   * @generated
   */
  public Adapter createEntityAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.CPackage <em>CPackage</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.CPackage
   * @generated
   */
  public Adapter createCPackageAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Relation <em>Relation</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Relation
   * @generated
   */
  public Adapter createRelationAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.RelationParse <em>Relation Parse</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.RelationParse
   * @generated
   */
  public Adapter createRelationParseAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.RelationType <em>Relation Type</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.RelationType
   * @generated
   */
  public Adapter createRelationTypeAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Enumer <em>Enumer</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Enumer
   * @generated
   */
  public Adapter createEnumerAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Clazz <em>Clazz</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Clazz
   * @generated
   */
  public Adapter createClazzAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Property <em>Property</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Property
   * @generated
   */
  public Adapter createPropertyAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.EntityList <em>Entity List</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.EntityList
   * @generated
   */
  public Adapter createEntityListAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.Note <em>Note</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.Note
   * @generated
   */
  public Adapter createNoteAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for an object of class '{@link rethink.uml.classDiagram.DataType <em>Data Type</em>}'.
   * <!-- begin-user-doc -->
   * This default implementation returns null so that we can easily ignore cases;
   * it's useful to ignore a case when inheritance will catch all the cases anyway.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @see rethink.uml.classDiagram.DataType
   * @generated
   */
  public Adapter createDataTypeAdapter()
  {
    return null;
  }

  /**
   * Creates a new adapter for the default case.
   * <!-- begin-user-doc -->
   * This default implementation returns null.
   * <!-- end-user-doc -->
   * @return the new adapter.
   * @generated
   */
  public Adapter createEObjectAdapter()
  {
    return null;
  }

} //ClassDiagramAdapterFactory
