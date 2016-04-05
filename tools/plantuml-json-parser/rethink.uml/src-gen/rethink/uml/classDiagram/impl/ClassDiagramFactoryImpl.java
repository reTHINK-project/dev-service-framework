/**
 */
package rethink.uml.classDiagram.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import rethink.uml.classDiagram.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class ClassDiagramFactoryImpl extends EFactoryImpl implements ClassDiagramFactory
{
  /**
   * Creates the default factory implementation.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public static ClassDiagramFactory init()
  {
    try
    {
      ClassDiagramFactory theClassDiagramFactory = (ClassDiagramFactory)EPackage.Registry.INSTANCE.getEFactory(ClassDiagramPackage.eNS_URI);
      if (theClassDiagramFactory != null)
      {
        return theClassDiagramFactory;
      }
    }
    catch (Exception exception)
    {
      EcorePlugin.INSTANCE.log(exception);
    }
    return new ClassDiagramFactoryImpl();
  }

  /**
   * Creates an instance of the factory.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public ClassDiagramFactoryImpl()
  {
    super();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public EObject create(EClass eClass)
  {
    switch (eClass.getClassifierID())
    {
      case ClassDiagramPackage.DOMAIN_MODEL: return createDomainModel();
      case ClassDiagramPackage.ELEMENT: return createElement();
      case ClassDiagramPackage.ENTITY_AND_NOTE: return createEntityAndNote();
      case ClassDiagramPackage.ENTITY: return createEntity();
      case ClassDiagramPackage.CPACKAGE: return createCPackage();
      case ClassDiagramPackage.RELATION: return createRelation();
      case ClassDiagramPackage.RELATION_PARSE: return createRelationParse();
      case ClassDiagramPackage.RELATION_TYPE: return createRelationType();
      case ClassDiagramPackage.ENUMER: return createEnumer();
      case ClassDiagramPackage.CLAZZ: return createClazz();
      case ClassDiagramPackage.PROPERTY: return createProperty();
      case ClassDiagramPackage.ENTITY_LIST: return createEntityList();
      case ClassDiagramPackage.NOTE: return createNote();
      case ClassDiagramPackage.DATA_TYPE: return createDataType();
      default:
        throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
    }
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public Object createFromString(EDataType eDataType, String initialValue)
  {
    switch (eDataType.getClassifierID())
    {
      case ClassDiagramPackage.PACKAGE_STYLE:
        return createPackageStyleFromString(eDataType, initialValue);
      case ClassDiagramPackage.COMP_TYPE:
        return createCompTypeFromString(eDataType, initialValue);
      case ClassDiagramPackage.NOTE_POSITION:
        return createNotePositionFromString(eDataType, initialValue);
      case ClassDiagramPackage.NATIVE_TYPE:
        return createNativeTypeFromString(eDataType, initialValue);
      default:
        throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
    }
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public String convertToString(EDataType eDataType, Object instanceValue)
  {
    switch (eDataType.getClassifierID())
    {
      case ClassDiagramPackage.PACKAGE_STYLE:
        return convertPackageStyleToString(eDataType, instanceValue);
      case ClassDiagramPackage.COMP_TYPE:
        return convertCompTypeToString(eDataType, instanceValue);
      case ClassDiagramPackage.NOTE_POSITION:
        return convertNotePositionToString(eDataType, instanceValue);
      case ClassDiagramPackage.NATIVE_TYPE:
        return convertNativeTypeToString(eDataType, instanceValue);
      default:
        throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
    }
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public DomainModel createDomainModel()
  {
    DomainModelImpl domainModel = new DomainModelImpl();
    return domainModel;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Element createElement()
  {
    ElementImpl element = new ElementImpl();
    return element;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public EntityAndNote createEntityAndNote()
  {
    EntityAndNoteImpl entityAndNote = new EntityAndNoteImpl();
    return entityAndNote;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Entity createEntity()
  {
    EntityImpl entity = new EntityImpl();
    return entity;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public CPackage createCPackage()
  {
    CPackageImpl cPackage = new CPackageImpl();
    return cPackage;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Relation createRelation()
  {
    RelationImpl relation = new RelationImpl();
    return relation;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public RelationParse createRelationParse()
  {
    RelationParseImpl relationParse = new RelationParseImpl();
    return relationParse;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public RelationType createRelationType()
  {
    RelationTypeImpl relationType = new RelationTypeImpl();
    return relationType;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Enumer createEnumer()
  {
    EnumerImpl enumer = new EnumerImpl();
    return enumer;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Clazz createClazz()
  {
    ClazzImpl clazz = new ClazzImpl();
    return clazz;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Property createProperty()
  {
    PropertyImpl property = new PropertyImpl();
    return property;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public EntityList createEntityList()
  {
    EntityListImpl entityList = new EntityListImpl();
    return entityList;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public Note createNote()
  {
    NoteImpl note = new NoteImpl();
    return note;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public DataType createDataType()
  {
    DataTypeImpl dataType = new DataTypeImpl();
    return dataType;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public PackageStyle createPackageStyleFromString(EDataType eDataType, String initialValue)
  {
    PackageStyle result = PackageStyle.get(initialValue);
    if (result == null) throw new IllegalArgumentException("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
    return result;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String convertPackageStyleToString(EDataType eDataType, Object instanceValue)
  {
    return instanceValue == null ? null : instanceValue.toString();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public CompType createCompTypeFromString(EDataType eDataType, String initialValue)
  {
    CompType result = CompType.get(initialValue);
    if (result == null) throw new IllegalArgumentException("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
    return result;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String convertCompTypeToString(EDataType eDataType, Object instanceValue)
  {
    return instanceValue == null ? null : instanceValue.toString();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotePosition createNotePositionFromString(EDataType eDataType, String initialValue)
  {
    NotePosition result = NotePosition.get(initialValue);
    if (result == null) throw new IllegalArgumentException("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
    return result;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String convertNotePositionToString(EDataType eDataType, Object instanceValue)
  {
    return instanceValue == null ? null : instanceValue.toString();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NativeType createNativeTypeFromString(EDataType eDataType, String initialValue)
  {
    NativeType result = NativeType.get(initialValue);
    if (result == null) throw new IllegalArgumentException("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
    return result;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String convertNativeTypeToString(EDataType eDataType, Object instanceValue)
  {
    return instanceValue == null ? null : instanceValue.toString();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public ClassDiagramPackage getClassDiagramPackage()
  {
    return (ClassDiagramPackage)getEPackage();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @deprecated
   * @generated
   */
  @Deprecated
  public static ClassDiagramPackage getPackage()
  {
    return ClassDiagramPackage.eINSTANCE;
  }

} //ClassDiagramFactoryImpl
