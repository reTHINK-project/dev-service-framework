/**
 */
package rethink.uml.classDiagram;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>CPackage</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.CPackage#getStyle <em>Style</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.CPackage#getElements <em>Elements</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getCPackage()
 * @model
 * @generated
 */
public interface CPackage extends Node
{
  /**
   * Returns the value of the '<em><b>Style</b></em>' attribute.
   * The literals are from the enumeration {@link rethink.uml.classDiagram.PackageStyle}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Style</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Style</em>' attribute.
   * @see rethink.uml.classDiagram.PackageStyle
   * @see #setStyle(PackageStyle)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getCPackage_Style()
   * @model
   * @generated
   */
  PackageStyle getStyle();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.CPackage#getStyle <em>Style</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Style</em>' attribute.
   * @see rethink.uml.classDiagram.PackageStyle
   * @see #getStyle()
   * @generated
   */
  void setStyle(PackageStyle value);

  /**
   * Returns the value of the '<em><b>Elements</b></em>' containment reference list.
   * The list contents are of type {@link rethink.uml.classDiagram.Element}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Elements</em>' containment reference list isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Elements</em>' containment reference list.
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getCPackage_Elements()
   * @model containment="true"
   * @generated
   */
  EList<Element> getElements();

} // CPackage
