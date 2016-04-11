/*
 * generated by Xtext
 */
package rethink.uml.generator

import org.eclipse.emf.ecore.resource.Resource
import org.eclipse.xtext.generator.IGenerator
import org.eclipse.xtext.generator.IFileSystemAccess
import com.google.inject.Inject
import org.eclipse.xtext.naming.IQualifiedNameProvider
import rethink.uml.classDiagram.Clazz
import rethink.uml.classDiagram.Relation
import rethink.uml.classDiagram.Enumer
import java.util.List
import rethink.uml.classDiagram.Entity
import rethink.uml.classDiagram.CPackage
import java.util.LinkedList
import rethink.uml.classDiagram.DataType

/**
 * Generates code from your model files on save.
 * 
 * See https://www.eclipse.org/Xtext/documentation/303_runtime_concepts.html#code-generation
 */
class ClassDiagramGenerator implements IGenerator {
	
	@Inject extension IQualifiedNameProvider
	
	override void doGenerate(Resource resource, IFileSystemAccess fsa) {
      	for(pack: resource.allContents.filter(CPackage).toIterable) {
      		//fsa.generateFile(pack.fullyQualifiedName.toString("/") + ".json", compile(resource, pack))
      		
      		if(pack.elements.exists[it instanceof Entity]) {
      			fsa.generateFile(pack.fullyQualifiedName.toString + ".json", compile(resource, pack))	
      		}
      	}
	}
	
	def compile(Resource resource, CPackage pack) {
		var cPack = new LinkedList<String>

		for(clazz: pack.eAllContents.filter(Clazz).toIterable) {
			/*val hierarchy = resource.allContents.filter(Relation).filter[
				if(leftRef == clazz && rightRef instanceof Entity && relType.ext == true)
					return true
				
				return false
			].head
			
			val relations = resource.allContents.filter(Relation).filter[
				if(leftRef == clazz && rightRef instanceof Entity && relType.ext == false)
					return true
				
				return false
			].toList

			val invRelations = resource.allContents.filter(Relation).filter[
				if(rightRef == clazz && leftRef instanceof Entity && relType.direct == false && relType.ext == false)
					return true
				
				return false
			].toList
			*/
			
			val invHierarchy = resource.allContents.filter(Relation).map[
				if(leftRef instanceof Clazz && rightRef == clazz && relType.ext == true)
					return leftRef as Entity
				
				return null
			].filterNull.toList

			val cClass = compileClass(pack, clazz, invHierarchy);//, relations, invRelations)
		
			cPack += '''
				«IF clazz.name == pack.name»
					"id": "«clazz.name»",
					«cClass»
				«ELSE»
					"«clazz.name»": {
						«cClass»
					}
				«ENDIF»
			'''
      	}
      	
      	return '''
      		{
      			"$schema": "http://json-schema.org/draft-04/schema#",

      			«FOR item: cPack SEPARATOR ", "»
      				«item»
      			«ENDFOR»
      		}
      	'''
	}
	
	def compileClass(CPackage pack, Clazz clazz, List<Entity> invHierarchy) {
		//required properties...
		val required = clazz.properties.filter[!optional].map[name].toList
		
		//required relations...
		/*required.addAll(relations.filter[
			relType.multi != null && relType.multi.contains("1") && !relType.multi.contains("0") ||
			relType.comp == CompType.NONE
		].map[relationName(false)])*/

		/*
		«IF hierarchy != null»
			"allOf": [
				{«hierarchy.rightRef.processRef(pack)»}
			],
		«ENDIF» 
		 */
		
		return '''
			"type": "object",
			«IF !required.empty»
				"required": [«FOR prop:required SEPARATOR ", "»"«prop»"«ENDFOR»],
			«ENDIF»
			«IF !invHierarchy.empty»
				«invHierarchy.processRefList(pack)»,
			«ENDIF»
			"properties": {
				«FOR prop:clazz.properties SEPARATOR ','»
					"«prop.name»": {
						«IF prop.constant»
							"constant": «prop.value»
						«ELSE»
							«IF prop.entityList == null»
								«prop.type.processDataType(pack)»
							«ELSE»
								"type": "object",
								«prop.entityList.refs.toList.processRefList(pack)»
							«ENDIF»
						«ENDIF»
					}
				«ENDFOR»
			}
		'''
				/*
				«IF !relations.empty»
					«IF !clazz.properties.empty»,«ENDIF»
					«FOR rel:relations SEPARATOR ","»
						"«rel.relationName(false)»": {
							«processRelation(pack, rel.rightRef, rel.relType.comp, rel.relType.multi) »
						}
					«ENDFOR»
				«ENDIF»
				«IF !invRelations.empty»
					«IF !clazz.properties.empty || !relations.empty»,«ENDIF»
					«FOR rel:invRelations SEPARATOR ","»
						"«rel.relationName(true)»": {
							«processRelation(pack, rel.leftRef, CompType.NONE, "1")»
						}
					«ENDFOR»
				«ENDIF»
				*/
	}
	
	/*
	def relationName(Relation rel, boolean isInv) {
		if(isInv)
			return '''«rel.leftRef.name.toFirstLower»Inv'''
		else
			return '''«rel.rightRef.name.toFirstLower»«IF rel.relType.comp != CompType.NONE»Array«ENDIF»'''
	}
	
	def processRelation(CPackage pack, EntityAndNote ref, CompType type, String multi) {
		var selector = 0
		if(multi != null && multi.contains("*") || multi == null && type != CompType.NONE) {
			selector = 1
		}
		
		switch(selector) {
			case 0: return ref.processRef(pack)
			case 1: return '''
				"type": "array",
				"items": {
					«ref.processRef(pack)»
				}
			'''
		}
	}
	*/
	
	def processRefList(List<Entity> list, CPackage pack) '''
		"anyOf": [
			«FOR ref: list SEPARATOR ','»	
				{ «ref.processRef(pack)» }
			«ENDFOR»
		]
	'''
	
	def processRef(Entity ref, CPackage pack) {
		if(ref instanceof Enumer) {
			return '''
				"enum": [
					«FOR eType:ref.types SEPARATOR ','»
						"«eType.toLowerCase»"
					«ENDFOR»
				]
			'''
		} else if(ref instanceof Clazz) {
			if(ref.stereotype == '(T,orchid)') {
				return '"type": "string"'
			} else {
				val refPack = ref.eContainer as CPackage
				if(refPack == pack) {
					return '''"$ref": "#/«ref.name»"'''
				} else {
					return '''"$ref": "«refPack.fullyQualifiedName».json#/«ref.name»"'''
				}
			}
		}
	}
	
	def processDataType(DataType type, CPackage pack) {
		if(type == null) return '"type": "null"'
		
		if(type.isArray) {
			'''
				"type": "array",
				"items": {
					«type.processSimpleType(pack)»
				}
			'''
		} else {
			return type.processSimpleType(pack)
		}
	}
	
	def processSimpleType(DataType type, CPackage pack) {
		if(type.entity == null) {
			return '''"type": "«type.native.getName.toLowerCase»"'''
		} else {
			return type.entity.processRef(pack)
		}
	}
}
