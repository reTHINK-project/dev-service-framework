/**
 */
package rethink.uml.classDiagram.impl;

import java.util.Collection;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EObjectResolvingEList;

import rethink.uml.classDiagram.ClassDiagramPackage;
import rethink.uml.classDiagram.Entity;
import rethink.uml.classDiagram.EntityList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Entity List</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.EntityListImpl#getRefs <em>Refs</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class EntityListImpl extends MinimalEObjectImpl.Container implements EntityList
{
  /**
   * The cached value of the '{@link #getRefs() <em>Refs</em>}' reference list.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getRefs()
   * @generated
   * @ordered
   */
  protected EList<Entity> refs;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected EntityListImpl()
  {
    super();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  protected EClass eStaticClass()
  {
    return ClassDiagramPackage.Literals.ENTITY_LIST;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public EList<Entity> getRefs()
  {
    if (refs == null)
    {
      refs = new EObjectResolvingEList<Entity>(Entity.class, this, ClassDiagramPackage.ENTITY_LIST__REFS);
    }
    return refs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public Object eGet(int featureID, boolean resolve, boolean coreType)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.ENTITY_LIST__REFS:
        return getRefs();
    }
    return super.eGet(featureID, resolve, coreType);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @SuppressWarnings("unchecked")
  @Override
  public void eSet(int featureID, Object newValue)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.ENTITY_LIST__REFS:
        getRefs().clear();
        getRefs().addAll((Collection<? extends Entity>)newValue);
        return;
    }
    super.eSet(featureID, newValue);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void eUnset(int featureID)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.ENTITY_LIST__REFS:
        getRefs().clear();
        return;
    }
    super.eUnset(featureID);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public boolean eIsSet(int featureID)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.ENTITY_LIST__REFS:
        return refs != null && !refs.isEmpty();
    }
    return super.eIsSet(featureID);
  }

} //EntityListImpl
