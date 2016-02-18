Identity Management Messages
----------------------------

This doc specifies Messages to be used to manage Identities, where,

-	`<IdentityDataObject>` is a JSON object compliant with [IdentityDataObject data model](../../datamodel/user-identity).

#### Relying Party Login

(since the login will be handled by the IDP Proxy this message is an RPC to execute the login)
<<<<<<< .mine

=======
Message sent by the Identity Module function to Identity Management (IDP Proxy). Change the body to be compliant with RPC-JSON.
>>>>>>> .theirs

```
"id" : "1"
"type" : "EXECUTE",
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
