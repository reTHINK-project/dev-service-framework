### Hyperty Data Object Synchronisation Messages

This doc specifies Messages that are used to manage Hyperty Data Object Synchronisation, including:

-	[Synchronisation Management Messages by Syncher Reporter](#synchronisation-management-by-syncher-reporter)
-	[Synchronisation Management by Syncher Observer](#synchronisation-management-by-syncher-observer)
-	[Synchronisation management by Sync Manager Reporter](#synchronisation-management-by-sync-manager-reporter)
-	[Synchronisation management by Sync Manager Observer](#synchronisation-management-by-sync-manager-observer)
-	[Synchronisation Management by Message Node](#synchronisation-management-by-message-node)
-	[Synchronisation Messages among Synchers](#synchronisation-messages-among-synchers)

where,

-	`<ObjectURL>` is any valid [Data Object URL](https://github.com/reTHINK-project/dev-service-framework/blob/master/docs/datamodel/address/readme.md) including CommunicationURL, ConnectionURL and ContextURL. Example: `"comm://example.com/<alice>/123456"`
-	`<json object>` is the Data Object instance itself
-	`<ChildDataObject>` is a Child Data Object instance itself

#### Synchronisation Management by Syncher Reporter

##### Hyperty Data Object Creation

Message sent by the Reporter Syncher Hyperty to Reporter Runtime Sync Manager.

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>", "authorise" : [{"HypertyURL"}], "value" : "<json object> , "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

**note:** `"resource"` is present in the body in case the ObjectURL is already known by the reporter eg in a Reporter delegation procedure.

###### Response

Reporter Runtime Sync Manager Response Message sent to the Reporter Syncher Hyperty to confirm Object Data creation.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code" : "200", "resource" : "<ObjectURL>", "childrenResources" : [{"<resource-children-name>"}] }
```

Reporter Runtime Sync Manager forwards to the Reporter Syncher Hyperty, Response Messages sent by invited Observer Hyperties.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code" : "1XX\2XX" , "source" : "hyperty://<sp-domain>/<hyperty-observer-instance-identifier>" }
```

##### Delete Data Object requested by Reporter

Message sent by Object Reporter Hyperty to Reporter Runtime Sync Manager.

```
"id" : "6"
"type" : "DELETE",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>" }
```

###### Response

Response Message sent back by Reporter Runtime Sync Manager to Object Reporter Hyperty.

```
"id" : "6"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code" : "200" }
```

#### Synchronisation Management by Syncher Observer

##### Hyperty request to be an Observer

Message sent by Observer (candidate) Hyperty Instance to the Observer Runtime Sync Manager.

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}], "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

###### Response

200OK Response Message sent back by Observer Runtime Sync Manager to Observer Hyperty Instance containing in the body the most updated version of Data Object.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"body" : { "code" : "2XX", "value" : "<data object>"  }
```

##### Data Object Unsubscription request by Observer Hyperty

Message sent by Object Observer Hyperty to Runtime Observer Sync Manager .

```
"id" : "7"
"type" : "UNSUBSCRIBE",
"from" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}]}
```

###### Unsubscription Response

Response Message sent back by Runtime Observer Sync Manager to Object Observer Hyperty.

```
"id" : "7"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"body" : { "code" : "2XX" }
```


Response to Object Delete sent by Runtime Reporter

#### Synchronisation management by Sync Manager Reporter

##### Observer Invitation

Message sent by the Reporter Runtime Sync Manager to invited Observer Hyperty Instance.

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-observer-instance-identifier>",
"body" : { "resource" : "<ObjectURL>", "childrenResources" : [{"<resource-children-name>"}] , "value" : "<json object > , "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

###### Response

Response Message sent back by invited Hyperty Instance to the Reporter Runtime Sync Manager.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"to" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"body" : { "code" : "1XX\2XX"  }
```

##### All Observers are requested to delete Data Object

Message sent by Reporter Runtime Sync Manager to Object Changes Handler.

```
"id" : "6"
"type" : "DELETE",
"from" : "<ObjectURL>/subscription",
"to" : "<ObjectURL>/changes"
```

###### Response to Object Delete

Message sent by Observer Runtime Sync Manager to Object Subscription Handler, on behalf of Observer Hyperty.

```
"id" : "6"
"type" : "RESPONSE",
"from" : "<ObjectURL>/changes",
"to" : "<ObjectURL>/subscription",
"body" : { "code" : "2XX", "source" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>" }
```

#### Synchronisation management by Sync Manager Observer

##### Observer Subscription request sent to Data Object Subscription Handler

Message sent by Observer Runtime Sync Manager to Data Object Subscription Handler.

```
"id" : "2"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "<ObjectURL>/subscription",
"body" : {  "subscriber" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>" }
```

###### Response

200OK Response Message sent back by Data Object Subscription Handler to Observer Runtime Sync Manager containing in the body the most updated version of Data Object.

```
"id" : "2"
"type" : "RESPONSE",
"from" : "<ObjectURL>/subscription",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX", "value" : "<data object>"  }
```

##### Observer Unsubscription request sent to Data Object Subscription Handler

Message sent by Observer Runtime Sync Manager to Data Object Subscription Handler.

```
"id" : "8"
"type" : "UNSUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "<ObjectURL>/subscription",
"body" : {  "subscriber" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>", "childrenResources" : [{"<resource-children-name>"}] }
```

###### Response

200OK Response Message sent back by Data Object Subscription Handler to Observer Runtime Sync Manager.

```
"id" : "8"
"type" : "RESPONSE",
"from" : "<ObjectURL>/subscription",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX"   }
```

#### Synchronisation Management by Message Node

##### Data Sync Routing Path setup request at Observer Message Node

Message sent by Observer Runtime Sync Manager to Message Node to request the setup of the Data Sync Routing Path.

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "domain://msg-node.<observer-sp-domain>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}], "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>"}
```

###### Response

200OK Response Message sent back by Message Node to Observer Runtime Sync Manager.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "domain://msg-node.<observer-sp-domain>/sm",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX"  }
```

##### Request to remove Data Sync Routing Path at Observer Message Node

Message sent by Observer Runtime Sync Manager to Message Node to request the removal of the Data Sync Routing Path.

```
"id" : "9"
"type" : "UNSUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "domain://msg-node.<observer-sp-domain>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}] }
```

###### Response

200OK Response Message sent back by Message Node to Observer Runtime Sync Manager.

```
"id" : "9"
"type" : "RESPONSE",
"from" : "domain://msg-node.<observer-sp-domain>/sm",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX"  }
```

#### Synchronisation Messages among Synchers

##### Data Object Update

Message sent by Object Reporter Hyperty to Data Object Changes Handler.

```
"id" : "3"
"type" : "UPDATE",
"from" : "<ObjectURL>",
"to" : "<ObjectURL>/changes",
"body" : { "value" : "changed value"  }
```

Message sent by Object Reporter Hyperty to Data Object Changes Handler when an array is changed.

```
"id" : "3"
"type" : "UPDATE",
"from" : "<ObjectURL>",
"to" : "<ObjectURL>/changes",
"body" : { "attributeType" : "ARRAY", "operation" : "ADD|REMOVE", "value" : <changed value>  }
```

##### Creation of Data Object child

Message sent by Child Object Reporter Hyperty to Data Object Parent Children Handler.

```
"id" : "4"
"type" : "CREATE",
"from" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>",
"to" : "<ObjectURL>/children/<resource-children-name>",
"body" : { "resource" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>#<1>", "value" : "{  "<ChildDataObject>" }  }
```

###### Response

(Optional) Response Message from Child Object Observer Hyperty to Child Object Reporter Hyperty.

```
"id" : "4"
"type" : "RESPONSE",
"from" : "<ObjectURL>/children/<resource-children-name>",
"to" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>",
"body" : { "code" : "2XX" , "source" : "hyperty://<sp-domain>/<hyperty-child-observer-identifier>"   }
```

##### Update of Data Object Child

Message sent by Child Object Reporter Hyperty to Data Object Parent Children Handler.

```
"id" : "5"
"type" : "UPDATE",
"from" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>",
"to" : "<ObjectURL>/children/<resource-children-name>",
"body" : { "resource" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>#<1>", "value" : "{ "<UpdatedChildDataObject>" }  }
```

##### Delete of Data Object Child

Message sent by Child Object Reporter Hyperty to Data Object Parent Children Handler.

```
"id" : "5"
"type" : "DELETE",
"from" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>",
"to" : "<ObjectURL>/children/<resource-children-name>",
"body" : { "resource" : "hyperty://<sp-domain>/<hyperty-child-reporter-identifier>#<1>" }
```
