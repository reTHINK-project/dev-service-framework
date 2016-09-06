 "This Spec is for Phase 1!! Most updated version is [here](https://github.com/reTHINK-project/specs/tree/master/messages)" 
=============== 
### Global Registry Messages

This doc specifies the Messages to be used when interacting with the Global Registry.


#### Querying the Global Registry

Querying the Global Registry with a GUID. See method "queryGlobalRegistry(guid)" in GraphConnector
for example.

```
"id" : 1,
"type" : "READ",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"to" : "global://registry",
"body" : { "resource" : <guid> }
```

Response from Global Registry:

```
"id" : 1,
"type" : "response",
"from" : "global://registry/",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"body" : { "description" : "request was performed successfully",
"code" : 200,
"value" : <jwt> }
```



#### Sending the Global Registry Record


Sending a Global Registry Record, a JWT (JSON Web Token), to the Global Registry. See method
"sendGlobalRegistryRecord(jwt)" in GraphConnector for example.

```
"id" : 1,
"type" : "create",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"to" : "global://registry",
"body" : { "resource" : <guid>, "value" : <jwt> }
```

Response from Global Registry:

```
"id" : 1,
"type" : "response",
"from" : "global://registry",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"body" : { "description" : "request was performed successfully",
"code" : 200 }
```
