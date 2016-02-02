### Hyperty Data Object Synchronisation Messages

This doc specifies Messages that are used to manage Hyperty Data Object Synchronisation, where,

#### Hyperty Data Object Creation

Message sent by the Reporter Syncher Hyperty to Reporter Runtime Sync Manager.

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"to" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>", "authorise" : [{"HypertyURL"}], "value" : "<json object> , "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

**note:** `"resource"` is present in the body in case the ObjectURL is already known by the reporter eg in a Reporter delegation procedure.

Reporter Runtime Sync Manager Response Message sent to the Reporter Syncher Hyperty to confirm Object Data creation.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-instance-identifier>",
"body" : { "code" : "200", "value" : "{ "resource" : "<ObjectURL>", "childrenResources" : [{"<resource-children-name>"}] } }
```

#### Observer Invitation

Message sent by the Reporter Runtime Sync Manager to invited Observer Hyperty Instance.

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"to" : "hyperty://<sp-domain>/<hyperty-observer-instance-identifier>",
"body" : { "resource" : "<ObjectURL>", "childrenResources" : [{"<resource-children-name>"}] , "value" : "<json object > , "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

Response Message sent back by invited Hyperty Instance to the Reporter Runtime Sync Manager.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"to" : "hyperty-runtime://<sp-domain>/<hyperty-runtime-instance-identifier>/sm",
"body" : { "code" : "1XX\2XX"  }
```

#### Hyperty request to be an Observer

Message sent by Observer (candidate) Hyperty Instance to the Observer Runtime Sync Manager.

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}], "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>" }
```

200OK Response Message sent back by Observer Runtime Sync Manager to Observer Hyperty Instance containing in the body the most updated version of Data Object.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>",
"body" : { "code" : "2XX", "value" : "<data object>"  }
```

#### Data Sync Routing Path setup request at Observer Message Node

Message sent by Observer Runtime Sync Manager to Message Node to request the setup of the Data Sync Routing Path.

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "domain://msg-node.<observer-sp-domain>/sm",
"body" : { "resource" : "<ObjectURL>" , "childrenResources" : [{"<resource-children-name>"}], "schema" : "hyperty-catalogue://<sp-domain>/dataObjectSchema/<schema-identifier>"}
```

200OK Response Message sent back by Message Node to Observer Runtime Sync Manager.

```
"id" : "1"
"type" : "RESPONSE",
"from" : "domain://msg-node.<observer-sp-domain>/sm",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX"  }
```

#### Observer Subscription request sent to Data Object Subscription Handler

Message sent by Observer Runtime Sync Manager to Data Object Subscription Handler.

```
"id" : "2"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"to" : "<ObjectURL>/subscription",
"body" : {  "subscriber" : "hyperty://<observer-sp-domain>/<hyperty-observer-instance-identifier>" }
```

200OK Response Message sent back by Data Object Subscription Handler to Observer Runtime Sync Manager containing in the body the most updated version of Data Object.

```
"id" : "2"
"type" : "RESPONSE",
"from" : "<ObjectURL>/subscription",
"to" : "hyperty-runtime://<observer-sp-domain>/<hyperty-observer-runtime-instance-identifier>/sm",
"body" : { "code" : "2XX", "value" : "<data object>"  }
```
