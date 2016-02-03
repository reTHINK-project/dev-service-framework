Registration Messages
---------------------

This doc specifies Messages to be used to manage registrations in the Domain Registry, where,

-	`<RegistryDataObject>` is a JSON object compliant with [RegistryDataObject data model](https://github.com/reTHINK-project/dev-service-framework/tree/master/docs/datamodel/hyperty-registry).
-	`<userURL>` is the a user address compliant with [UserURL data model](https://github.com/reTHINK-project/dev-service-framework/blob/master/docs/datamodel/address/readme.md#user-url-type). Example: `user://example.com/bob`
-	`<DiscoveredHypertyInstance>` is a JSON object compliant with [HypertyInstance data model](https://github.com/reTHINK-project/dev-service-framework/tree/develop/docs/datamodel/hyperty-registry#hyperty-instance).
-	`<DiscoveredDataObjectInstance>` is a JSON object compliant with [HypertyDataObjectInstance data model](https://github.com/reTHINK-project/dev-service-framework/tree/develop/docs/datamodel/hyperty-registry#hyperty-instance).

#### Registration request

Message sent by the Hyperty Runtime Registry function to Registry Domain server (Connector or Protostub).

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"to" : "domain://registry.<sp-domain>",
"body" : { "value" : <RegistryDataObject> }
```

Message sent by the Registry Domain server (Connector or Protostub) to Hyperty Runtime Registry function.

```
"id" : "<1>"
"type" : "RESPONSE",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/registry",
"body" : { "code": 200 }
```

#### Hyperty Instance Query per User

Message sent by an Hyperty Instance to Registry Domain server (Connector or Protostub).

```
"id" : "2",
"type" : "READ",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "domain://registry.<sp1>"
"body" : { "resource" : "/hyperty-instance/user/<userURL>" }
```

**Response Message returning the discovered Hyperty Instances**

Message sent by Registry Domain server (Connector or Protostub) to an Hyperty Instance.

```
"id" : "2"
"type" : "RESPONSE",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code": 200, "value" : ["<discoveredHypertyInstance>"] }
```

#### Data Object Query per User

Message sent by an Hyperty Instance to Registry Domain server (Connector or Protostub).

```
"id" : "3",
"type" : "READ",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "domain://registry.<sp-domain>"
"body" : { "resource" : "/hyperty-data-object-instance/<scheme>/owner/<userURL>" }
```

**Response Message returning the discovered Hyperty Data Object Instances**

Message sent by Registry Domain server (Connector or Protostub) to an Hyperty Instance.

```
"id" : "2"
"type" : "RESPONSE",
"from" : "domain://registry.<sp-domain>",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code": 200, "value" : ["<DiscoveredDataObjectInstance>"] }
```
