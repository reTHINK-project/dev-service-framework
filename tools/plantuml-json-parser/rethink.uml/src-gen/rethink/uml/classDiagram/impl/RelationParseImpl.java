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
import rethink.uml.classDiagram.CompType;
import rethink.uml.classDiagram.RelationParse;
import rethink.uml.classDiagram.RelationType;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Relation Parse</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationParseImpl#getComp <em>Comp</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationParseImpl#getType <em>Type</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationParseImpl#isDirect <em>Direct</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationParseImpl#getMulti <em>Multi</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.impl.RelationParseImpl#isExt <em>Ext</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class RelationParseImpl extends MinimalEObjectImpl.Container implements RelationParse
{
  /**
   * The default value of the '{@link #getComp() <em>Comp</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getComp()
   * @generated
   * @ordered
   */
  protected static final CompType COMP_EDEFAULT = CompType.NONE;

  /**
   * The cached value of the '{@link #getComp() <em>Comp</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getComp()
   * @generated
   * @ordered
   */
  protected CompType comp = COMP_EDEFAULT;

  /**
   * The cached value of the '{@link #getType() <em>Type</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getType()
   * @generated
   * @ordered
   */
  protected RelationType type;

  /**
   * The default value of the '{@link #isDirect() <em>Direct</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isDirect()
   * @generated
   * @ordered
   */
  protected static final boolean DIRECT_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isDirect() <em>Direct</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isDirect()
   * @generated
   * @ordered
   */
  protected boolean direct = DIRECT_EDEFAULT;

  /**
   * The default value of the '{@link #getMulti() <em>Multi</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getMulti()
   * @generated
   * @ordered
   */
  protected static final String MULTI_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getMulti() <em>Multi</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getMulti()
   * @generated
   * @ordered
   */
  protected String multi = MULTI_EDEFAULT;

  /**
   * The default value of the '{@link #isExt() <em>Ext</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isExt()
   * @generated
   * @ordered
   */
  protected static final boolean EXT_EDEFAULT = false;

  /**
   * The cached value of the '{@link #isExt() <em>Ext</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #isExt()
   * @generated
   * @ordered
   */
  protected boolean ext = EXT_EDEFAULT;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected RelationParseImpl()
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
    return ClassDiagramPackage.Literals.RELATION_PARSE;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public CompType getComp()
  {
    return comp;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setComp(CompType newComp)
  {
    CompType oldComp = comp;
    comp = newComp == null ? COMP_EDEFAULT : newComp;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__COMP, oldComp, comp));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public RelationType getType()
  {
    return type;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotificationChain basicSetType(RelationType newType, NotificationChain msgs)
  {
    RelationType oldType = type;
    type = newType;
    if (eNotificationRequired())
    {
      ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__TYPE, oldType, newType);
      if (msgs == null) msgs = notification; else msgs.add(notification);
    }
    return msgs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setType(RelationType newType)
  {
    if (newType != type)
    {
      NotificationChain msgs = null;
      if (type != null)
        msgs = ((InternalEObject)type).eInverseRemove(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.RELATION_PARSE__TYPE, null, msgs);
      if (newType != null)
        msgs = ((InternalEObject)newType).eInverseAdd(this, EOPPOSITE_FEATURE_BASE - ClassDiagramPackage.RELATION_PARSE__TYPE, null, msgs);
      msgs = basicSetType(newType, msgs);
      if (msgs != null) msgs.dispatch();
    }
    else if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__TYPE, newType, newType));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isDirect()
  {
    return direct;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setDirect(boolean newDirect)
  {
    boolean oldDirect = direct;
    direct = newDirect;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__DIRECT, oldDirect, direct));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getMulti()
  {
    return multi;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setMulti(String newMulti)
  {
    String oldMulti = multi;
    multi = newMulti;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__MULTI, oldMulti, multi));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public boolean isExt()
  {
    return ext;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setExt(boolean newExt)
  {
    boolean oldExt = ext;
    ext = newExt;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ClassDiagramPackage.RELATION_PARSE__EXT, oldExt, ext));
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
      case ClassDiagramPackage.RELATION_PARSE__TYPE:
        return basicSetType(null, msgs);
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
      case ClassDiagramPackage.RELATION_PARSE__COMP:
        return getComp();
      case ClassDiagramPackage.RELATION_PARSE__TYPE:
        return getType();
      case ClassDiagramPackage.RELATION_PARSE__DIRECT:
        return isDirect();
      case ClassDiagramPackage.RELATION_PARSE__MULTI:
        return getMulti();
      case ClassDiagramPackage.RELATION_PARSE__EXT:
        return isExt();
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
      case ClassDiagramPackage.RELATION_PARSE__COMP:
        setComp((CompType)newValue);
        return;
      case ClassDiagramPackage.RELATION_PARSE__TYPE:
        setType((RelationType)newValue);
        return;
      case ClassDiagramPackage.RELATION_PARSE__DIRECT:
        setDirect((Boolean)newValue);
        return;
      case ClassDiagramPackage.RELATION_PARSE__MULTI:
        setMulti((String)newValue);
        return;
      case ClassDiagramPackage.RELATION_PARSE__EXT:
        setExt((Boolean)newValue);
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
      case ClassDiagramPackage.RELATION_PARSE__COMP:
        setComp(COMP_EDEFAULT);
        return;
      case ClassDiagramPackage.RELATION_PARSE__TYPE:
        setType((RelationType)null);
        return;
      case ClassDiagramPackage.RELATION_PARSE__DIRECT:
        setDirect(DIRECT_EDEFAULT);
        return;
      case ClassDiagramPackage.RELATION_PARSE__MULTI:
        setMulti(MULTI_EDEFAULT);
        return;
      case ClassDiagramPackage.RELATION_PARSE__EXT:
        setExt(EXT_EDEFAULT);
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
      case ClassDiagramPackage.RELATION_PARSE__COMP:
        return comp != COMP_EDEFAULT;
      case ClassDiagramPackage.RELATION_PARSE__TYPE:
        return type != null;
      case ClassDiagramPackage.RELATION_PARSE__DIRECT:
        return direct != DIRECT_EDEFAULT;
      case ClassDiagramPackage.RELATION_PARSE__MULTI:
        return MULTI_EDEFAULT == null ? multi != null : !MULTI_EDEFAULT.equals(multi);
      case ClassDiagramPackage.RELATION_PARSE__EXT:
        return ext != EXT_EDEFAULT;
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
    result.append(" (comp: ");
    result.append(comp);
    result.append(", direct: ");
    result.append(direct);
    result.append(", multi: ");
    result.append(multi);
    result.append(", ext: ");
    result.append(ext);
    result.append(')');
    return result.toString();
  }

} //RelationParseImpl
