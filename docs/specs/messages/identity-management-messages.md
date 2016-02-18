Identity Management Messages
----------------------------

This doc specifies Messages to be used to manage Identities, where,

-	`<IdentityDataObject>` is a JSON object compliant with [IdentityDataObject data model](../../datamodel/user-identity).

#### Relying Party Login

Message sent by the Identity Module function to Identity Management (IDP Proxy) to trigger a Relying Party login. The GUI to support this login will be provided by the IDP Proxy, probably a windows downloaded from the IDP.

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"to" : "domain://<idp-domain>",
"body" : { "resource" : "/identity/<user identifier>/idtoken", "value" : <IdentityDataObject> }
```

Response Message sent back from the Identity Management (IDP Proxy).

```
"id" : "<1>"
"type" : "RESPONSE",
"from" : "domain://<idp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"body" : { "code": 200, "idToken": <JWT Token> }
```
