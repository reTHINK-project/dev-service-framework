/**
 */
package rethink.uml.classDiagram;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Domain Model</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link rethink.uml.classDiagram.DomainModel#getFile <em>File</em>}</li>
 *   <li>{@link rethink.uml.classDiagram.DomainModel#getPackages <em>Packages</em>}</li>
 * </ul>
 * </p>
 *
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getDomainModel()
 * @model
 * @generated
 */
public interface DomainModel extends EObject
{
  /**
   * Returns the value of the '<em><b>File</b></em>' attribute.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>File</em>' attribute isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>File</em>' attribute.
   * @see #setFile(String)
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getDomainModel_File()
   * @model
   * @generated
   */
  String getFile();

  /**
   * Sets the value of the '{@link rethink.uml.classDiagram.DomainModel#getFile <em>File</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>File</em>' attribute.
   * @see #getFile()
   * @generated
   */
  void setFile(String value);

  /**
   * Returns the value of the '<em><b>Packages</b></em>' containment reference list.
   * The list contents are of type {@link rethink.uml.classDiagram.CPackage}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Packages</em>' containment reference list isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Packages</em>' containment reference list.
   * @see rethink.uml.classDiagram.ClassDiagramPackage#getDomainModel_Packages()
   * @model containment="true"
   * @generated
   */
  EList<CPackage> getPackages();

} // DomainModel
