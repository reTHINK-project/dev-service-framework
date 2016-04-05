/**
 */
package rethink.uml.classDiagram;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Relation</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.Relation#getLeftRef <em>Left Ref</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.Relation#getRelType <em>Rel Type</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.Relation#getRightRef <em>Right Ref</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelation()
 * @model
 * @generated
 */
public interface Relation extends Element
{
  /**
   * Returns the value of the '<em><b>Left Ref</b></em>' reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Left Ref</em>' reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Left Ref</em>' reference.
   * @see #setLeftRef(EntityAndNote)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelation_LeftRef()
   * @model
   * @generated
   */
  EntityAndNote getLeftRef();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Relation#getLeftRef <em>Left Ref</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Left Ref</em>' reference.
   * @see #getLeftRef()
   * @generated
   */
  void setLeftRef(EntityAndNote value);

  /**
   * Returns the value of the '<em><b>Rel Type</b></em>' containment reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Rel Type</em>' containment reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Rel Type</em>' containment reference.
   * @see #setRelType(RelationParse)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelation_RelType()
   * @model containment="true"
   * @generated
   */
  RelationParse getRelType();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Relation#getRelType <em>Rel Type</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Rel Type</em>' containment reference.
   * @see #getRelType()
   * @generated
   */
  void setRelType(RelationParse value);

  /**
   * Returns the value of the '<em><b>Right Ref</b></em>' reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Right Ref</em>' reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Right Ref</em>' reference.
   * @see #setRightRef(EntityAndNote)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getRelation_RightRef()
   * @model
   * @generated
   */
  EntityAndNote getRightRef();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Relation#getRightRef <em>Right Ref</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Right Ref</em>' reference.
   * @see #getRightRef()
   * @generated
   */
  void setRightRef(EntityAndNote value);

} // Relation
