### PlantUML (subset) parser and generator of JSON Schema.

#### PlantUML and JSON Schema

PlantUML is an open-source tool allowing users to create UML diagrams from a plain text language, without concerning themselves to mutch with layout. It uses Graphviz software to layout its diagrams. Plain text language are nice targets for parsers and text to text transformation. PlantUML can be translated to other schema definition formats.

#### The Tool

PlantUML is very flexible, but also lacks constraints that are necessary for certain transformations that depend on the target output. These constraints are left for other tools to decide, and that is exactly what plantuml-json-parser does.
This tool is only for a subset of the class diagram definitions. It adds constraints that avoid redundant parsing rules and some that are necessary to be compliant with JSON Schema (e.g. types for properties and format).
The tool not only adds a transformation process to JSON Schema, it also verifies if everything is correct (references, names, field formats and relations), becoming a value-added tool that confirms the consistency of the model.

There are 2 eclipse plugins in folder bin/plugins, but it's possible to use command line parser with Run class available in puml-parse.jar.

##### How to use the Tool with Eclipse IDE

Just drop both jar's in eclipse "dropins" folder. [Xtext](https://eclipse.org/Xtext/) plugin is needed.
In eclipse create a java project and in source folder create any file "*.cduml" to use the parser/generator. Generation is automatic if no errors are emitted. You may need to add Xtext nature to the project (normally eclipse IDE asks if the user what's this, when some files extensions are recognized).

##### How to use the Tool in Command Line

Just run the command "java -jar puml-parse.jar" and it will parse and generate JSON Schema, for any file existent in the directory that is compliant with the parser rules and have extension "*.cduml".

##### Parser Rules
PlantUML has many open rules that can conflict or add complexity to the JSON Schema generation. To avoid this, we should follow some additional constraints added to the PlantUML parser. You should consider this as a subset of Class Diagram PlantUML.

* Supported entities are: package, relation, class, enum, note
* When defining relations like "X --> Y" do not use the inverse alternative "Y <-- X".
* Define class properties like "\<name\> [?] : [type]", the symbol "?" signals a non mandatory property. Available types are null, string, number, integer, boolean or any other class/enum, defaults to null. Constant properties are supported with "\<name\> = \<value\>".
* Notes are available only in a restricted format like "note \<top | bottom | left | right\> of <\entity\> [text] end note" for an attached note to an entity (class or enum). Or not attached alternative like "note as \<id\> [text] end note". Some inline notes are supported like: "note \<top | bottom | left | right\>: [text]" or "note "[text]" as \<note name\>".
* Relations with notes are also supported.

#### Example

One simple example of a plantuml class diagram and associated generated json-schema related to the Communication Model used in reTHINK:

```javascript
package Communication <<Rect>> {

	enum CommunicationStatus {
		OPEN
		PENDING
		CLOSED
		PAUSED
		FAILED
	}

	enum ParticipantStatus {}

	class Communication {
		id
		host 
		owner 
		startingTime
		lastModified
		duration
	}

	class Participant {}
	class CommunicationQuality {}
	class HypertyResource {}

	Communication .. CommunicationStatus
	Communication *.. Participant
	Communication *.. CommunicationQuality
	Communication *.. Message.Message
	
	... //other non presented data

	HypertyResource ..> Connection.Connection : transportedBy
}
```

For the Communication class it generates the JSON Schema:
```javascript
{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"id": "Communication",
	"type": "object",
	"required": ["id", "host", "owner", "startingTime", "lastModified", "duration", "communicationStatus"],
	"additionalProperties": false,
	"properties": {
		"id": {
			"type": "null"
		},
		"host": {
			"type": "null"
		},
		"owner": {
			"type": "null"
		},
		"startingTime": {
			"type": "null"
		},
		"lastModified": {
			"type": "null"
		},
		"duration": {
			"type": "null"
		}
		,
		"communicationStatus": {
			"enum": [
				"OPEN",
				"PENDING",
				"CLOSED",
				"PAUSED",
				"FAILED"
			]
		},
		"participantArray": {
			"type": "array",
			"items": {
				"$ref": "../Communication/Participant.json"
			}
		},
		"communicationQualityArray": {
			"type": "array",
			"items": {
				"$ref": "../Communication/CommunicationQuality.json"
			}
		},
		"messageArray": {
			"type": "array",
			"items": {
				"$ref": "../Message/Message.json"
			}
		}
	}
}
```
