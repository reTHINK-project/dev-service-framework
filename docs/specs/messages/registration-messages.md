 "This Spec is for Phase 1!! Most updated version is [here](https://github.com/reTHINK-project/specs/tree/master/messages)" 
=============== 
### Registration Messages

This doc specifies Messages to be used to manage registrations in the Domain Registry, where,

-	`<RegistryDataObject>` is a JSON object compliant with [RegistryDataObject data model](https://github.com/reTHINK-project/dev-service-framework/tree/master/docs/datamodel/core/hyperty-registry).
-	`<registry-object-identifier>` is a string that is part of the RegistryDataObject.url to uniquely identify the RegistryDataObject in its domain. In the Hyperty URL example `hyperty://example.com/1234-qwert` , "1234-qwert" is the `<registry-object-identifier>`
-	`<registry-object-url-scheme>` is the URL Scheme used in the RegistryDataObject.url. In this RegistryOject URL example `connection://example.com/1234-qwert` , "connection" is the `<registry-object-url-scheme>`
-	`<userURL>` is the user address compliant with [UserURL data model](https://github.com/reTHINK-project/dev-service-framework/blob/master/docs/datamodel/core/address/readme.md#user-url-type). Example: `user://example.com/bob`
-	`<DiscoveredHypertyInstance>` is a JSON object compliant with [HypertyInstance data model](https://github.com/reTHINK-project/dev-service-framework/tree/develop/docs/datamodel/core/hyperty-registry#hyperty-instance).
-	`<discoveredRegistryDataObjects>` is a JSON object compliant with [HypertyDataObjectInstance data model](https://github.com/reTHINK-project/dev-service-framework/tree/develop/docs/datamodel/core/hyperty-registry#hyperty-instance).

#### Registration request

Message sent by the Hyperty Runtime Registry function to Registry Domain server (Connector or Protostub).

```
"id" : "1"
"type" : "create",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"to" : "domain://registry.<sp-domain>",
"body" : { "value" : <RegistryDataObject> }
```

Message sent by the Registry Domain server (Connector or Protostub) to Hyperty Runtime Registry function.

```
"id" : "<1>"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"body" : { "code": 200 }
```

#### Unregistration request

Message sent by the Hyperty Runtime Registry function to Registry Domain server (Connector or Protostub).

```
"id" : "4"
"type" : "delete",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"to" : "domain://registry.<sp-domain>",
"body" : { "value" : <RegistryDataObject> }
```

Message sent by the Registry Domain server (Connector or Protostub) to Hyperty Runtime Registry function.

```
"id" : "<4>"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"body" : { "code": 200 }
```

#### keep registration alive

Message sent by the Hyperty Runtime Registry function to Registry Domain server (Connector or Protostub).

```
"id" : "6"
"type" : "update",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"to" : "domain://registry.<sp-domain>",
"body" : { "resource" : "/<registry-object-url-scheme>/<registry-object-identifier>" }
```

Response Message sent back by the Registry Domain server (Connector or Protostub) to Hyperty Runtime Registry function.

```
"id" : "<6>"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"body" : { "code": 200 }
```

#### Registry Data Object search per User

Message sent by an Hyperty Instance to Registry Domain server to query about all active Hyperty instances associated to a certain user.

```
"id" : "2",
"type" : "read",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "domain://registry.<sp1>"
"body" : { "resource" : "/<registry-object-url-scheme>/user/<userURL>" }
```

**Response Message returning the discovered Hyperty Instances**

Message sent by Registry Domain server to an Hyperty Instance.

```
"id" : "2"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code": 200, "value" : ["<discoveredRegistryDataObjects>"] }
```

#### Hyperty Instance Query per User and/or per resources and/or per Object Scheme

Message sent by an Hyperty Instance to Registry Domain server to query about all active instances associated to a certain user for some types of Hyperty Resources and data schemes.

```
"id" : "2",
"type" : "read",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "domain://registry.<sp1>"
"body" : { "resource": "/<registry-object-url-scheme>/user/<userURL>", "criteria" : { "resources": ["<resources>"], "dataSchemes": ["<schema>"] }}
```

**Response Message returning the discovered Hyperty Instances**

Message sent by Registry Domain server (Connector or Protostub) to an Hyperty Instance.

```
"id" : "2"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code": 200, "value" : ["<discoveredHypertyInstance>"] }
```

#### Registry Not Found Responses

Message sent by Registry Domain server to an Hyperty Instance when no entries are found for a query request.

```
"id" : "2"
"type" : "response",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code": 404, "description" : "Not Found" }
```
