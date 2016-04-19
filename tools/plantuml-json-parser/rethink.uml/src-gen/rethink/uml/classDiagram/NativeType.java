/**
 */
package rethink.uml.classDiagram;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>Native Type</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see rethink.uml.classDiagram.ClassDiagramPackage#getNativeType()
 * @model
 * @generated
 */
public enum NativeType implements Enumerator
{
  /**
   * The '<em><b>String</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #STRING_VALUE
   * @generated
   * @ordered
   */
  STRING(0, "string", "string"),

  /**
   * The '<em><b>Number</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #NUMBER_VALUE
   * @generated
   * @ordered
   */
  NUMBER(1, "number", "number"),

  /**
   * The '<em><b>Integer</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #INTEGER_VALUE
   * @generated
   * @ordered
   */
  INTEGER(2, "integer", "integer"),

  /**
   * The '<em><b>Boolean</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #BOOLEAN_VALUE
   * @generated
   * @ordered
   */
  BOOLEAN(3, "boolean", "boolean"),

  /**
   * The '<em><b>Date</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #DATE_VALUE
   * @generated
   * @ordered
   */
  DATE(4, "date", "date"),

  /**
   * The '<em><b>Object</b></em>' literal object.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #OBJECT_VALUE
   * @generated
   * @ordered
   */
  OBJECT(5, "object", "object");

  /**
   * The '<em><b>String</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>String</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #STRING
   * @model name="string"
   * @generated
   * @ordered
   */
  public static final int STRING_VALUE = 0;

  /**
   * The '<em><b>Number</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Number</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #NUMBER
   * @model name="number"
   * @generated
   * @ordered
   */
  public static final int NUMBER_VALUE = 1;

  /**
   * The '<em><b>Integer</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Integer</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #INTEGER
   * @model name="integer"
   * @generated
   * @ordered
   */
  public static final int INTEGER_VALUE = 2;

  /**
   * The '<em><b>Boolean</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Boolean</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #BOOLEAN
   * @model name="boolean"
   * @generated
   * @ordered
   */
  public static final int BOOLEAN_VALUE = 3;

  /**
   * The '<em><b>Date</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Date</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #DATE
   * @model name="date"
   * @generated
   * @ordered
   */
  public static final int DATE_VALUE = 4;

  /**
   * The '<em><b>Object</b></em>' literal value.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of '<em><b>Object</b></em>' literal object isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @see #OBJECT
   * @model name="object"
   * @generated
   * @ordered
   */
  public static final int OBJECT_VALUE = 5;

  /**
   * An array of all the '<em><b>Native Type</b></em>' enumerators.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  private static final NativeType[] VALUES_ARRAY =
    new NativeType[]
    {
      STRING,
      NUMBER,
      INTEGER,
      BOOLEAN,
      DATE,
      OBJECT,
    };

  /**
   * A public read-only list of all the '<em><b>Native Type</b></em>' enumerators.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static final List<NativeType> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

  /**
   * Returns the '<em><b>Native Type</b></em>' literal with the specified literal value.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static NativeType get(String literal)
  {
    for (int i = 0; i < VALUES_ARRAY.length; ++i)
    {
      NativeType result = VALUES_ARRAY[i];
      if (result.toString().equals(literal))
      {
        return result;
      }
    }
    return null;
  }

  /**
   * Returns the '<em><b>Native Type</b></em>' literal with the specified name.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static NativeType getByName(String name)
  {
    for (int i = 0; i < VALUES_ARRAY.length; ++i)
    {
      NativeType result = VALUES_ARRAY[i];
      if (result.getName().equals(name))
      {
        return result;
      }
    }
    return null;
  }

  /**
   * Returns the '<em><b>Native Type</b></em>' literal with the specified integer value.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static NativeType get(int value)
  {
    switch (value)
    {
      case STRING_VALUE: return STRING;
      case NUMBER_VALUE: return NUMBER;
      case INTEGER_VALUE: return INTEGER;
      case BOOLEAN_VALUE: return BOOLEAN;
      case DATE_VALUE: return DATE;
      case OBJECT_VALUE: return OBJECT;
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
  private NativeType(int value, String name, String literal)
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
  
} //NativeType
