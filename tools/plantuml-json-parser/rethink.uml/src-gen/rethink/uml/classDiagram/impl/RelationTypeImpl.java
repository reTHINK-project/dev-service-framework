/**
 */
package rethink.uml.classDiagram.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import rethink.uml.classDiagram.ClassDiagramPackage;
import rethink.uml.classDiagram.RelationType;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Relation Type</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationTypeImpl#isStrong <em>Strong</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationTypeImpl#isWeak <em>Weak</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class RelationTypeImpl extends MinimalEObjectImpl.Container implements RelationType
{
  /**
   * The default value of the '{@link #isStrong() <em>Strong</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isStrong()
   * @generated
   * @ordered
   */
  protected static final boolean STRONG_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isStrong() <em>Strong</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isStrong()
   * @generated
   * @ordered
   */
  protected boolean strong = STRONG_EDEFAULT;

  /**
   * The default value of the '{@link #isWeak() <em>Weak</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isWeak()
   * @generated
   * @ordered
   */
  protected static final boolean WEAK_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isWeak() <em>Weak</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isWeak()
   * @generated
   * @ordered
   */
  protected boolean weak = WEAK_EDEFAULT;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected RelationTypeImpl()
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
    return ClassDiagramPackage.Literals.RELATION_TYPE;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isStrong()
  {
    return strong;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setStrong(boolean newStrong)
  {
    boolean oldStrong = strong;
    strong = newStrong;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_TYPE__STRONG, oldStrong, strong));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isWeak()
  {
    return weak;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setWeak(boolean newWeak)
  {
    boolean oldWeak = weak;
    weak = newWeak;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_TYPE__WEAK, oldWeak, weak));
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
      case ClassDiagramPackage.RELATION_TYPE__STRONG:
        return isStrong();
      case ClassDiagramPackage.RELATION_TYPE__WEAK:
        return isWeak();
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
      case ClassDiagramPackage.RELATION_TYPE__STRONG:
        setStrong((Boolean)newValue);
        return;
      case ClassDiagramPackage.RELATION_TYPE__WEAK:
        setWeak((Boolean)newValue);
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
      case ClassDiagramPackage.RELATION_TYPE__STRONG:
        setStrong(STRONG_EDEFAULT);
        return;
      case ClassDiagramPackage.RELATION_TYPE__WEAK:
        setWeak(WEAK_EDEFAULT);
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
      case ClassDiagramPackage.RELATION_TYPE__STRONG:
        return strong != STRONG_EDEFAULT;
      case ClassDiagramPackage.RELATION_TYPE__WEAK:
        return weak != WEAK_EDEFAULT;
    }
    return super.eIsSet(featureID);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public String toString()
  {
    if (eIsProxy()) return super.toString();

    StringBuffer result = new StringBuffer(super.toString());
    result.append(" (strong: ");
    result.append(strong);
    result.append(", weak: ");
    result.append(weak);
    result.append(')');
    return result.toString();
  }

} //RelationTypeImpl
