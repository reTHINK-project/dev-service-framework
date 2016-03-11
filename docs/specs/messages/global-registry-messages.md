### Global Registry Messages

This doc specifies the Messages to be used when interacting with the Global Registry.


#### Querying the Global Registry

Querying the Global Registry with a GUID. See method "queryGlobalRegistry(guid)" in GraphConnector
for example.

```
"id" : 1,
"type" : "READ",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"to" : "global://registry/",
"body" : { "guid" : <guid> }
```

Response from Global Registry:

```
"id" : 1,
"type" : "response",
"from" : "global://registry/",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"body" : { "message" : "request was performed successfully",
"responseCode" : 200,
"data" : <jwt>,
"errorCode" : 0 }
```



#### Sending the Global Registry Record


Sending a Global Registry Record, a JWT (JSON Web Token), to the Global Registry. See method
"sendGlobalRegistryRecord(jwt)" in GraphConnector for example.

```
"id" : 1,
"type" : "CREATE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"to" : "global://registry/",
"body" : { "guid" : <guid>, "jwt" : <jwt> }
```

Response from Global Registry:

```
"id" : 1,
"type" : "response",
"from" : "global://registry/",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/graph-connector",
"body" : { "message" : "request was performed successfully",
"responseCode" : 200,
"errorCode" : 0 }
```
