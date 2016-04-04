/**
 */
package rethink.uml.classDiagram;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Relation Parse</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.RelationParse#getComp <em>Comp</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.RelationParse#getType <em>Type</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.RelationParse#isDirect <em>Direct</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.RelationParse#getMulti <em>Multi</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.RelationParse#isExt <em>Ext</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse()
 * @model
 * @generated
 */
public interface RelationParse extends EObject
{
  /**
   * Returns the value of the '<em><b>Comp</b></em>' attribute.
   * The literals are from the enumeration {@link rethink.uml.classDiagram.CompType}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Comp</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Comp</em>' attribute.
   * @see rethink.uml.classDiagram.CompType
   * @see #setComp(CompType)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse_Comp()
   * @model
   * @generated
   */
  CompType getComp();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.RelationParse#getComp <em>Comp</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Comp</em>' attribute.
   * @see rethink.uml.classDiagram.CompType
   * @see #getComp()
   * @generated
   */
  void setComp(CompType value);

  /**
   * Returns the value of the '<em><b>Type</b></em>' containment reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Type</em>' containment reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Type</em>' containment reference.
   * @see #setType(RelationType)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse_Type()
   * @model containment="true"
   * @generated
   */
  RelationType getType();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.RelationParse#getType <em>Type</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Type</em>' containment reference.
   * @see #getType()
   * @generated
   */
  void setType(RelationType value);

  /**
   * Returns the value of the '<em><b>Direct</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Direct</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Direct</em>' attribute.
   * @see #setDirect(boolean)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse_Direct()
   * @model
   * @generated
   */
  boolean isDirect();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.RelationParse#isDirect <em>Direct</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Direct</em>' attribute.
   * @see #isDirect()
   * @generated
   */
  void setDirect(boolean value);

  /**
   * Returns the value of the '<em><b>Multi</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Multi</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Multi</em>' attribute.
   * @see #setMulti(String)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse_Multi()
   * @model
   * @generated
   */
  String getMulti();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.RelationParse#getMulti <em>Multi</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Multi</em>' attribute.
   * @see #getMulti()
   * @generated
   */
  void setMulti(String value);

  /**
   * Returns the value of the '<em><b>Ext</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Ext</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Ext</em>' attribute.
   * @see #setExt(boolean)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelationParse_Ext()
   * @model
   * @generated
   */
  boolean isExt();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.RelationParse#isExt <em>Ext</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Ext</em>' attribute.
   * @see #isExt()
   * @generated
   */
  void setExt(boolean value);

} // RelationParse
