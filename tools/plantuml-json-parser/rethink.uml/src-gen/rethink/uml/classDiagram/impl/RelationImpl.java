/**
 */
package rethink.uml.classDiagram.impl;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import rethink.uml.classDiagram.ClassDiagramPackage;
import rethink.uml.classDiagram.Node;
import rethink.uml.classDiagram.Relation;
import rethink.uml.classDiagram.RelationParse;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Relation</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationImpl#getLeftRef <em>Left Ref</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationImpl#getRelType <em>Rel Type</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationImpl#getRightRef <em>Right Ref</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class RelationImpl extends ElementImpl implements Relation
{
  /**
   * The cached value of the '{@link #getLeftRef() <em>Left Ref</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getLeftRef()
   * @generated
   * @ordered
   */
  protected Node leftRef;

  /**
   * The cached value of the '{@link #getRelType() <em>Rel Type</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getRelType()
   * @generated
   * @ordered
   */
  protected RelationParse relType;

  /**
   * The cached value of the '{@link #getRightRef() <em>Right Ref</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getRightRef()
   * @generated
   * @ordered
   */
  protected Node rightRef;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected RelationImpl()
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
    return ClassDiagramPackage.Literals.RELATION;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Node getLeftRef()
  {
    if (leftRef != null && leftRef.eIsProxy())
    {
      InternalEObject oldLeftRef = (InternalEObject)leftRef;
      leftRef = (Node)eResolveProxy(oldLeftRef);
      if (leftRef != oldLeftRef)
      {
        if (eNotificationRequired())
          eNotify(new ENotificationImpl(this, Notification.RESOLVE, ClassDiagramPackage.RELATION__LEFT_REF, oldLeftRef, leftRef));
      }
    }
    return leftRef;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Node basicGetLeftRef()
  {
    return leftRef;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setLeftRef(Node newLeftRef)
  {
    Node oldLeftRef = leftRef;
    leftRef = newLeftRef;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION__LEFT_REF, oldLeftRef, leftRef));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public RelationParse getRelType()
  {
    return relType;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotificationChain basicSetRelType(RelationParse newRelType, NotificationChain msgs)
  {
    RelationParse oldRelType = relType;
    relType = newRelType;
    if (eNotificationRequired())
    {
      ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION__REL_TYPE, oldRelType, newRelType);
      if (msgs == null) msgs = notification; else msgs.add(notification);
    }
    return msgs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setRelType(RelationParse newRelType)
  {
    if (newRelType != relType)
    {
      NotificationChain msgs = null;
      if (relType != null)
        msgs = ((InternalEObject)relType).eInverseRemove(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.RELATION__REL_TYPE, null, msgs);
      if (newRelType != null)
        msgs = ((InternalEObject)newRelType).eInverseAdd(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.RELATION__REL_TYPE, null, msgs);
      msgs = basicSetRelType(newRelType, msgs);
      if (msgs != null) msgs.dispatch();
    }
    else if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION__REL_TYPE, newRelType, newRelType));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Node getRightRef()
  {
    if (rightRef != null && rightRef.eIsProxy())
    {
      InternalEObject oldRightRef = (InternalEObject)rightRef;
      rightRef = (Node)eResolveProxy(oldRightRef);
      if (rightRef != oldRightRef)
      {
        if (eNotificationRequired())
          eNotify(new ENotificationImpl(this, Notification.RESOLVE, ClassDiagramPackage.RELATION__RIGHT_REF, oldRightRef, rightRef));
      }
    }
    return rightRef;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Node basicGetRightRef()
  {
    return rightRef;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setRightRef(Node newRightRef)
  {
    Node oldRightRef = rightRef;
    rightRef = newRightRef;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION__RIGHT_REF, oldRightRef, rightRef));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.RELATION__REL_TYPE:
        return basicSetRelType(null, msgs);
    }
    return super.eInverseRemove(otherEnd, featureID, msgs);
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
      case ClassDiagramPackage.RELATION__LEFT_REF:
        if (resolve) return getLeftRef();
        return basicGetLeftRef();
      case ClassDiagramPackage.RELATION__REL_TYPE:
        return getRelType();
      case ClassDiagramPackage.RELATION__RIGHT_REF:
        if (resolve) return getRightRef();
        return basicGetRightRef();
    }
    return super.eGet(featureID, resolve, coreType);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void eSet(int featureID, Object newValue)
  {
    switch (featureID)
    {
      case ClassDiagramPackage.RELATION__LEFT_REF:
        setLeftRef((Node)newValue);
        return;
      case ClassDiagramPackage.RELATION__REL_TYPE:
        setRelType((RelationParse)newValue);
        return;
      case ClassDiagramPackage.RELATION__RIGHT_REF:
        setRightRef((Node)newValue);
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
      case ClassDiagramPackage.RELATION__LEFT_REF:
        setLeftRef((Node)null);
        return;
      case ClassDiagramPackage.RELATION__REL_TYPE:
        setRelType((RelationParse)null);
        return;
      case ClassDiagramPackage.RELATION__RIGHT_REF:
        setRightRef((Node)null);
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
      case ClassDiagramPackage.RELATION__LEFT_REF:
        return leftRef != null;
      case ClassDiagramPackage.RELATION__REL_TYPE:
        return relType != null;
      case ClassDiagramPackage.RELATION__RIGHT_REF:
        return rightRef != null;
    }
    return super.eIsSet(featureID);
  }

} //RelationImpl
