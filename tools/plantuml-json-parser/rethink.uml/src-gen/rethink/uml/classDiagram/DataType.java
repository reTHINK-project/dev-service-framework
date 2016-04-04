/**
 */
package rethink.uml.classDiagram;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Data Type</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.DataType#getNative <em>Native</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.DataType#isIsArray <em>Is Array</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getDataType()
 * @model
 * @generated
 */
public interface DataType extends EObject
{
  /**
   * Returns the value of the '<em><b>Native</b></em>' attribute.
   * The literals are from the enumeration {@link rethink.uml.classDiagram.NativeType}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Native</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Native</em>' attribute.
   * @see rethink.uml.classDiagram.NativeType
   * @see #setNative(NativeType)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getDataType_Native()
   * @model
   * @generated
   */
  NativeType getNative();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.DataType#getNative <em>Native</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Native</em>' attribute.
   * @see rethink.uml.classDiagram.NativeType
   * @see #getNative()
   * @generated
   */
  void setNative(NativeType value);

  /**
   * Returns the value of the '<em><b>Is Array</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Is Array</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Is Array</em>' attribute.
   * @see #setIsArray(boolean)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getDataType_IsArray()
   * @model
   * @generated
   */
  boolean isIsArray();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.DataType#isIsArray <em>Is Array</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Is Array</em>' attribute.
   * @see #isIsArray()
   * @generated
   */
  void setIsArray(boolean value);

} // DataType
