/**
 */
package rethink.uml.classDiagram;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>Package Style</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getPackageStyle()
 * @model
 * @generated
 */
public enum PackageStyle implements Enumerator
{
  /**
   * The '<em><b>Node</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #NODE_VALUE
   * @generated
   * @ordered
   */
  NODE(0, "Node", "Node"),

  /**
   * The '<em><b>Rect</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #RECT_VALUE
   * @generated
   * @ordered
   */
  RECT(1, "Rect", "Rect"),

  /**
   * The '<em><b>Folder</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #FOLDER_VALUE
   * @generated
   * @ordered
   */
  FOLDER(2, "Folder", "Folder"),

  /**
   * The '<em><b>Frame</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #FRAME_VALUE
   * @generated
   * @ordered
   */
  FRAME(3, "Frame", "Frame"),

  /**
   * The '<em><b>Cloud</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #CLOUD_VALUE
   * @generated
   * @ordered
   */
  CLOUD(4, "Cloud", "Cloud"),

  /**
   * The '<em><b>Database</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #DATABASE_VALUE
   * @generated
   * @ordered
   */
  DATABASE(5, "Database", "Database");

  /**
   * The '<em><b>Node</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Node</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #NODE
   * @model name="Node"
   * @generated
   * @ordered
   */
  public static final int NODE_VALUE = 0;

  /**
   * The '<em><b>Rect</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Rect</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #RECT
   * @model name="Rect"
   * @generated
   * @ordered
   */
  public static final int RECT_VALUE = 1;

  /**
   * The '<em><b>Folder</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Folder</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #FOLDER
   * @model name="Folder"
   * @generated
   * @ordered
   */
  public static final int FOLDER_VALUE = 2;

  /**
   * The '<em><b>Frame</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Frame</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #FRAME
   * @model name="Frame"
   * @generated
   * @ordered
   */
  public static final int FRAME_VALUE = 3;

  /**
   * The '<em><b>Cloud</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Cloud</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #CLOUD
   * @model name="Cloud"
   * @generated
   * @ordered
   */
  public static final int CLOUD_VALUE = 4;

  /**
   * The '<em><b>Database</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Database</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #DATABASE
   * @model name="Database"
   * @generated
   * @ordered
   */
  public static final int DATABASE_VALUE = 5;

  /**
   * An array of all the '<em><b>Package Style</b></em>' enumerators.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private static final PackageStyle[] VALUES_ARRAY =
    new PackageStyle[]
    {
      NODE,
      RECT,
      FOLDER,
      FRAME,
      CLOUD,
      DATABASE,
    };

  /**
   * A public read-only list of all the '<em><b>Package Style</b></em>' enumerators.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static final List<PackageStyle> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

  /**
   * Returns the '<em><b>Package Style</b></em>' literal with the specified literal value.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static PackageStyle get(String literal)
  {
    for (int i = 0; i < VALUES_ARRAY.length; ++i)
    {
      PackageStyle result = VALUES_ARRAY[i];
      if (result.toString().equals(literal))
      {
        return result;
      }
    }
    return null;
  }

  /**
   * Returns the '<em><b>Package Style</b></em>' literal with the specified name.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static PackageStyle getByName(String name)
  {
    for (int i = 0; i < VALUES_ARRAY.length; ++i)
    {
      PackageStyle result = VALUES_ARRAY[i];
      if (result.getName().equals(name))
      {
        return result;
      }
    }
    return null;
  }

  /**
   * Returns the '<em><b>Package Style</b></em>' literal with the specified integer value.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static PackageStyle get(int value)
  {
    switch (value)
    {
      case NODE_VALUE: return NODE;
      case RECT_VALUE: return RECT;
      case FOLDER_VALUE: return FOLDER;
      case FRAME_VALUE: return FRAME;
      case CLOUD_VALUE: return CLOUD;
      case DATABASE_VALUE: return DATABASE;
    }
    return null;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private final int value;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private final String name;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private final String literal;

  /**
   * Only this class can construct instances.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private PackageStyle(int value, String name, String literal)
  {
    this.value = value;
    this.name = name;
    this.literal = literal;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public int getValue()
  {
    return value;
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
  public String getLiteral()
  {
    return literal;
  }

  /**
   * Returns the literal value of the enumerator, which is its string representation.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public String toString()
  {
    return literal;
  }
  
} //PackageStyle
