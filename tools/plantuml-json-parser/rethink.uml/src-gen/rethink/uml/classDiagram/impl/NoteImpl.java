/**
 */
package rethink.uml.classDiagram.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import rethink.uml.classDiagram.ClassDiagramPackage;
import rethink.uml.classDiagram.Entity;
import rethink.uml.classDiagram.Note;
import rethink.uml.classDiagram.NotePosition;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Note</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.NoteImpl#getPosition <em>Position</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.NoteImpl#getValue <em>Value</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.NoteImpl#getOf <em>Of</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class NoteImpl extends NodeImpl implements Note
{
  /**
   * The default value of the '{@link #getPosition() <em>Position</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getPosition()
   * @generated
   * @ordered
   */
  protected static final NotePosition POSITION_EDEFAULT = NotePosition.TOP;

  /**
   * The cached value of the '{@link #getPosition() <em>Position</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getPosition()
   * @generated
   * @ordered
   */
  protected NotePosition position = POSITION_EDEFAULT;

  /**
   * The default value of the '{@link #getValue() <em>Value</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getValue()
   * @generated
   * @ordered
   */
  protected static final String VALUE_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getValue() <em>Value</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getValue()
   * @generated
   * @ordered
   */
  protected String value = VALUE_EDEFAULT;

  /**
   * The cached value of the '{@link #getOf() <em>Of</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getOf()
   * @generated
   * @ordered
   */
  protected Entity of;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected NoteImpl()
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
    return ClassDiagramPackage.Literals.NOTE;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotePosition getPosition()
  {
    return position;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setPosition(NotePosition newPosition)
  {
    NotePosition oldPosition = position;
    position = newPosition == null ? POSITION_EDEFAULT : newPosition;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.NOTE__POSITION, oldPosition, position));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getValue()
  {
    return value;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setValue(String newValue)
  {
    String oldValue = value;
    value = newValue;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.NOTE__VALUE, oldValue, value));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Entity getOf()
  {
    if (of != null && of.eIsProxy())
    {
      InternalEObject oldOf = (InternalEObject)of;
      of = (Entity)eResolveProxy(oldOf);
      if (of != oldOf)
      {
        if (eNotificationRequired())
          eNotify(new ENotificationImpl(this, Notification.RESOLVE, ClassDiagramPackage.NOTE__OF, oldOf, of));
      }
    }
    return of;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Entity basicGetOf()
  {
    return of;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setOf(Entity newOf)
  {
    Entity oldOf = of;
    of = newOf;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.NOTE__OF, oldOf, of));
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
      case ClassDiagramPackage.NOTE__POSITION:
        return getPosition();
      case ClassDiagramPackage.NOTE__VALUE:
        return getValue();
      case ClassDiagramPackage.NOTE__OF:
        if (resolve) return getOf();
        return basicGetOf();
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
      case ClassDiagramPackage.NOTE__POSITION:
        setPosition((NotePosition)newValue);
        return;
      case ClassDiagramPackage.NOTE__VALUE:
        setValue((String)newValue);
        return;
      case ClassDiagramPackage.NOTE__OF:
        setOf((Entity)newValue);
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
      case ClassDiagramPackage.NOTE__POSITION:
        setPosition(POSITION_EDEFAULT);
        return;
      case ClassDiagramPackage.NOTE__VALUE:
        setValue(VALUE_EDEFAULT);
        return;
      case ClassDiagramPackage.NOTE__OF:
        setOf((Entity)null);
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
      case ClassDiagramPackage.NOTE__POSITION:
        return position != POSITION_EDEFAULT;
      case ClassDiagramPackage.NOTE__VALUE:
        return VALUE_EDEFAULT == null ? value != null : !VALUE_EDEFAULT.equals(value);
      case ClassDiagramPackage.NOTE__OF:
        return of != null;
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
    result.append(" (position: ");
    result.append(position);
    result.append(", value: ");
    result.append(value);
    result.append(')');
    return result.toString();
  }

} //NoteImpl
