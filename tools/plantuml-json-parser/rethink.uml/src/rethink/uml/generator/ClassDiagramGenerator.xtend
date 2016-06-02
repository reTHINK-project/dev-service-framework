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
import rethink.uml.classDiagram.NativeType

/**
 * Generates code from your model files on save.
 * 
 * See https://www.eclipse.org/Xtext/documentation/303_runtime_concepts.html#code-generation
 */
class ClassDiagramGenerator implements IGenerator {
	
	@Inject extension IQualifiedNameProvider
	
	override void doGenerate(Resource resource, IFileSystemAccess fsa) {
      	for(pack: resource.allContents.filter(CPackage).toIterable) {
      		if(pack.elements.exists[it instanceof Entity]) {
      			fsa.generateFile(pack.fullyQualifiedName.toString + ".json", compile(resource, pack))
      		}
      	}
	}
	
	def compile(Resource resource, CPackage pack) {
		var cPack = new LinkedList<String>

		for(clazz: pack.eAllContents.filter(Clazz).toIterable) {
			
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
		
		return '''
			"type": "object",
			«IF clazz.stereotype != null && clazz.stereotype != '(T,orchid)'»
				"stereotype": "«clazz.stereotype.toLowerCase»",
			«ENDIF»
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
	}
	
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
			return type.native.genNative
		} else {
			return type.entity.processRef(pack)
		}
	}
	
	def genNative(NativeType value) {
		if(value == NativeType.DATE) {
			return '''
				"type": "string",
				"format": "date-time"
			'''
		} else {
			return '''"type": "«value.getName.toLowerCase»"'''	
		}
	}
}
