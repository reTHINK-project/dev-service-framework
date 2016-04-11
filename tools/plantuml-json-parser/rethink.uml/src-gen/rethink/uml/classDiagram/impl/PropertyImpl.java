/**
 */
package rethink.uml.classDiagram.impl;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import rethink.uml.classDiagram.ClassDiagramPackage;
import rethink.uml.classDiagram.DataType;
import rethink.uml.classDiagram.EntityList;
import rethink.uml.classDiagram.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#getName <em>Name</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#isOptional <em>Optional</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#getType <em>Type</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#getEntityList <em>Entity List</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#isConstant <em>Constant</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.PropertyImpl#getValue <em>Value</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class PropertyImpl extends MinimalEObjectImpl.Container implements Property
{
  /**
   * The default value of the '{@link #getName() <em>Name</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getName()
   * @generated
   * @ordered
   */
  protected static final String NAME_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getName() <em>Name</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getName()
   * @generated
   * @ordered
   */
  protected String name = NAME_EDEFAULT;

  /**
   * The default value of the '{@link #isOptional() <em>Optional</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isOptional()
   * @generated
   * @ordered
   */
  protected static final boolean OPTIONAL_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isOptional() <em>Optional</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isOptional()
   * @generated
   * @ordered
   */
  protected boolean optional = OPTIONAL_EDEFAULT;

  /**
   * The cached value of the '{@link #getType() <em>Type</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getType()
   * @generated
   * @ordered
   */
  protected DataType type;

  /**
   * The cached value of the '{@link #getEntityList() <em>Entity List</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getEntityList()
   * @generated
   * @ordered
   */
  protected EntityList entityList;

  /**
   * The default value of the '{@link #isConstant() <em>Constant</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isConstant()
   * @generated
   * @ordered
   */
  protected static final boolean CONSTANT_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isConstant() <em>Constant</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isConstant()
   * @generated
   * @ordered
   */
  protected boolean constant = CONSTANT_EDEFAULT;

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
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected PropertyImpl()
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
    return ClassDiagramPackage.Literals.PROPERTY;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getName()
  {
    return name;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setName(String newName)
  {
    String oldName = name;
    name = newName;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__NAME, oldName, name));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isOptional()
  {
    return optional;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setOptional(boolean newOptional)
  {
    boolean oldOptional = optional;
    optional = newOptional;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__OPTIONAL, oldOptional, optional));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public DataType getType()
  {
    return type;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotificationChain basicSetType(DataType newType, NotificationChain msgs)
  {
    DataType oldType = type;
    type = newType;
    if (eNotificationRequired())
    {
      ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__TYPE, oldType, newType);
      if (msgs == null) msgs = notification; else msgs.add(notification);
    }
    return msgs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setType(DataType newType)
  {
    if (newType != type)
    {
      NotificationChain msgs = null;
      if (type != null)
        msgs = ((InternalEObject)type).eInverseRemove(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.PROPERTY__TYPE, null, msgs);
      if (newType != null)
        msgs = ((InternalEObject)newType).eInverseAdd(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.PROPERTY__TYPE, null, msgs);
      msgs = basicSetType(newType, msgs);
      if (msgs != null) msgs.dispatch();
    }
    else if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__TYPE, newType, newType));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public EntityList getEntityList()
  {
    return entityList;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotificationChain basicSetEntityList(EntityList newEntityList, NotificationChain msgs)
  {
    EntityList oldEntityList = entityList;
    entityList = newEntityList;
    if (eNotificationRequired())
    {
      ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__ENTITY_LIST, oldEntityList, newEntityList);
      if (msgs == null) msgs = notification; else msgs.add(notification);
    }
    return msgs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setEntityList(EntityList newEntityList)
  {
    if (newEntityList != entityList)
    {
      NotificationChain msgs = null;
      if (entityList != null)
        msgs = ((InternalEObject)entityList).eInverseRemove(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.PROPERTY__ENTITY_LIST, null, msgs);
      if (newEntityList != null)
        msgs = ((InternalEObject)newEntityList).eInverseAdd(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.PROPERTY__ENTITY_LIST, null, msgs);
      msgs = basicSetEntityList(newEntityList, msgs);
      if (msgs != null) msgs.dispatch();
    }
    else if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__ENTITY_LIST, newEntityList, newEntityList));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isConstant()
  {
    return constant;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setConstant(boolean newConstant)
  {
    boolean oldConstant = constant;
    constant = newConstant;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__CONSTANT, oldConstant, constant));
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
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.PROPERTY__VALUE, oldValue, value));
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
      case ClassDiagramPackage.PROPERTY__TYPE:
        return basicSetType(null, msgs);
      case ClassDiagramPackage.PROPERTY__ENTITY_LIST:
        return basicSetEntityList(null, msgs);
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
      case ClassDiagramPackage.PROPERTY__NAME:
        return getName();
      case ClassDiagramPackage.PROPERTY__OPTIONAL:
        return isOptional();
      case ClassDiagramPackage.PROPERTY__TYPE:
        return getType();
      case ClassDiagramPackage.PROPERTY__ENTITY_LIST:
        return getEntityList();
      case ClassDiagramPackage.PROPERTY__CONSTANT:
        return isConstant();
      case ClassDiagramPackage.PROPERTY__VALUE:
        return getValue();
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
      case ClassDiagramPackage.PROPERTY__NAME:
        setName((String)newValue);
        return;
      case ClassDiagramPackage.PROPERTY__OPTIONAL:
        setOptional((Boolean)newValue);
        return;
      case ClassDiagramPackage.PROPERTY__TYPE:
        setType((DataType)newValue);
        return;
      case ClassDiagramPackage.PROPERTY__ENTITY_LIST:
        setEntityList((EntityList)newValue);
        return;
      case ClassDiagramPackage.PROPERTY__CONSTANT:
        setConstant((Boolean)newValue);
        return;
      case ClassDiagramPackage.PROPERTY__VALUE:
        setValue((String)newValue);
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
      case ClassDiagramPackage.PROPERTY__NAME:
        setName(NAME_EDEFAULT);
        return;
      case ClassDiagramPackage.PROPERTY__OPTIONAL:
        setOptional(OPTIONAL_EDEFAULT);
        return;
      case ClassDiagramPackage.PROPERTY__TYPE:
        setType((DataType)null);
        return;
      case ClassDiagramPackage.PROPERTY__ENTITY_LIST:
        setEntityList((EntityList)null);
        return;
      case ClassDiagramPackage.PROPERTY__CONSTANT:
        setConstant(CONSTANT_EDEFAULT);
        return;
      case ClassDiagramPackage.PROPERTY__VALUE:
        setValue(VALUE_EDEFAULT);
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
      case ClassDiagramPackage.PROPERTY__NAME:
        return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
      case ClassDiagramPackage.PROPERTY__OPTIONAL:
        return optional != OPTIONAL_EDEFAULT;
      case ClassDiagramPackage.PROPERTY__TYPE:
        return type != null;
      case ClassDiagramPackage.PROPERTY__ENTITY_LIST:
        return entityList != null;
      case ClassDiagramPackage.PROPERTY__CONSTANT:
        return constant != CONSTANT_EDEFAULT;
      case ClassDiagramPackage.PROPERTY__VALUE:
        return VALUE_EDEFAULT == null ? value != null : !VALUE_EDEFAULT.equals(value);
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
    result.append(" (name: ");
    result.append(name);
    result.append(", optional: ");
    result.append(optional);
    result.append(", constant: ");
    result.append(constant);
    result.append(", value: ");
    result.append(value);
    result.append(')');
    return result.toString();
  }

} //PropertyImpl
