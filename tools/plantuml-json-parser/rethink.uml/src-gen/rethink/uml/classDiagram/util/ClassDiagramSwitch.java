/**
 */
package rethink.uml.classDiagram.util;

import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.util.Switch;

import rethink.uml.classDiagram.*;

/**
 * <!-- begin-user-doc -->
 * The <b>Switch</b> for the model's inheritance hierarchy.
 * It supports the call {@link #doSwitch(EObject) doSwitch(object)}
 * to invoke the <code>caseXXX</code> method for each class of the model,
 * starting with the actual class of the object
 * and proceeding up the inheritance hierarchy
 * until a non-null result is returned,
 * which is the result of the switch.
 * <!-- end-user-doc -->
 * @see rethink.uml.classDiagram.ClassDiagramPackage
 * @generated
 */
public class ClassDiagramSwitch<T> extends Switch<T>
{
  /**
   * The cached model package
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected static ClassDiagramPackage modelPackage;

  /**
   * Creates an instance of the switch.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public ClassDiagramSwitch()
  {
    if (modelPackage == null)
    {
      modelPackage = ClassDiagramPackage.eINSTANCE;
    }
  }

  /**
   * Checks whether this is a switch for the given package.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @parameter ePackage the package in question.
   * @return whether this is a switch for the given package.
   * @generated
   */
  @Override
  protected boolean isSwitchFor(EPackage ePackage)
  {
    return ePackage == modelPackage;
  }

  /**
   * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @return the first non-null result returned by a <code>caseXXX</code> call.
   * @generated
   */
  @Override
  protected T doSwitch(int classifierID, EObject theEObject)
  {
    switch (classifierID)
    {
      case ClassDiagramPackage.DOMAIN_MODEL:
      {
        DomainModel domainModel = (DomainModel)theEObject;
        T result = caseDomainModel(domainModel);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.ELEMENT:
      {
        Element element = (Element)theEObject;
        T result = caseElement(element);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.NODE:
      {
        Node node = (Node)theEObject;
        T result = caseNode(node);
        if (result == null) result = caseElement(node);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.ENTITY:
      {
        Entity entity = (Entity)theEObject;
        T result = caseEntity(entity);
        if (result == null) result = caseNode(entity);
        if (result == null) result = caseElement(entity);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.CPACKAGE:
      {
        CPackage cPackage = (CPackage)theEObject;
        T result = caseCPackage(cPackage);
        if (result == null) result = caseNode(cPackage);
        if (result == null) result = caseElement(cPackage);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.RELATION:
      {
        Relation relation = (Relation)theEObject;
        T result = caseRelation(relation);
        if (result == null) result = caseElement(relation);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.RELATION_PARSE:
      {
        RelationParse relationParse = (RelationParse)theEObject;
        T result = caseRelationParse(relationParse);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.RELATION_TYPE:
      {
        RelationType relationType = (RelationType)theEObject;
        T result = caseRelationType(relationType);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.ENUMER:
      {
        Enumer enumer = (Enumer)theEObject;
        T result = caseEnumer(enumer);
        if (result == null) result = caseEntity(enumer);
        if (result == null) result = caseNode(enumer);
        if (result == null) result = caseElement(enumer);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.CLAZZ:
      {
        Clazz clazz = (Clazz)theEObject;
        T result = caseClazz(clazz);
        if (result == null) result = caseEntity(clazz);
        if (result == null) result = caseNode(clazz);
        if (result == null) result = caseElement(clazz);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.PROPERTY:
      {
        Property property = (Property)theEObject;
        T result = caseProperty(property);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.ENTITY_LIST:
      {
        EntityList entityList = (EntityList)theEObject;
        T result = caseEntityList(entityList);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.NOTE:
      {
        Note note = (Note)theEObject;
        T result = caseNote(note);
        if (result == null) result = caseNode(note);
        if (result == null) result = caseElement(note);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      case ClassDiagramPackage.DATA_TYPE:
      {
        DataType dataType = (DataType)theEObject;
        T result = caseDataType(dataType);
        if (result == null) result = defaultCase(theEObject);
        return result;
      }
      default: return defaultCase(theEObject);
    }
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Domain Model</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Domain Model</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseDomainModel(DomainModel object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Element</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Element</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseElement(Element object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Node</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Node</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseNode(Node object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Entity</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Entity</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseEntity(Entity object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>CPackage</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>CPackage</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseCPackage(CPackage object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Relation</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Relation</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseRelation(Relation object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Relation Parse</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Relation Parse</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseRelationParse(RelationParse object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Relation Type</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Relation Type</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseRelationType(RelationType object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Enumer</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Enumer</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseEnumer(Enumer object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Clazz</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Clazz</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseClazz(Clazz object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Property</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Property</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseProperty(Property object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Entity List</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Entity List</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseEntityList(EntityList object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Note</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Note</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseNote(Note object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>Data Type</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>Data Type</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
   * @generated
   */
  public T caseDataType(DataType object)
  {
    return null;
  }

  /**
   * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
   * <!-- begin-user-doc -->
   * This implementation returns null;
   * returning a non-null result will terminate the switch, but this is the last case anyway.
   * <!-- end-user-doc -->
   * @param object the target of the switch.
   * @return the result of interpreting the object as an instance of '<em>EObject</em>'.
   * @see #doSwitch(org.eclipse.emf.ecore.EObject)
   * @generated
   */
  @Override
  public T defaultCase(EObject object)
  {
    return null;
  }

} //ClassDiagramSwitch
