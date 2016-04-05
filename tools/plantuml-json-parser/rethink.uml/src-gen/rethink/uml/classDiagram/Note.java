/**
 */
package rethink.uml.classDiagram;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Note</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.Note#getPosition <em>Position</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.Note#getValue <em>Value</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.Note#getOf <em>Of</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getNote()
 * @model
 * @generated
 */
public interface Note extends EntityAndNote
{
  /**
   * Returns the value of the '<em><b>Position</b></em>' attribute.
   * The literals are from the enumeration {@link rethink.uml.classDiagram.NotePosition}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Position</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Position</em>' attribute.
   * @see rethink.uml.classDiagram.NotePosition
   * @see #setPosition(NotePosition)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getNote_Position()
   * @model
   * @generated
   */
  NotePosition getPosition();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Note#getPosition <em>Position</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Position</em>' attribute.
   * @see rethink.uml.classDiagram.NotePosition
   * @see #getPosition()
   * @generated
   */
  void setPosition(NotePosition value);

  /**
   * Returns the value of the '<em><b>Value</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Value</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Value</em>' attribute.
   * @see #setValue(String)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getNote_Value()
   * @model
   * @generated
   */
  String getValue();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Note#getValue <em>Value</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Value</em>' attribute.
   * @see #getValue()
   * @generated
   */
  void setValue(String value);

  /**
   * Returns the value of the '<em><b>Of</b></em>' reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Of</em>' reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Of</em>' reference.
   * @see #setOf(Entity)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getNote_Of()
   * @model
   * @generated
   */
  Entity getOf();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.Note#getOf <em>Of</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Of</em>' reference.
   * @see #getOf()
   * @generated
   */
  void setOf(Entity value);

} // Note
