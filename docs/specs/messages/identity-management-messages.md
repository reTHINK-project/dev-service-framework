Identity Management Messages
----------------------------

This doc specifies Messages to be used to manage Identities, where,

-	`<login-scope>` is a JSON object compliant with ...
-	`<contents-value>` is a JSON object compliant with ...
-	`<origin-value>` is a JSON object compliant with ...
-	`<usernameHint-value>` is a JSON object compliant with ...
-	`<assertion-value>` is a JSON object compliant with ...

#### Relying Party Login

Message sent by the Identity Module function to Identity Management (IDP Proxy) to trigger a Relying Party login. The GUI to support this login will be provided by the IDP Proxy, probably a windows downloaded from the IDP.
(since the login will be handled by the IDP Proxy this message is an RPC to execute the login)

```
"id" : "1"
"type" : "EXECUTE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"to" : "domain://<idp-domain>",
"body" : { "resource" : "/identity/<user identifier>", "method" : "login" , "params" : { ["scope" : "<login-scope>"] }
```

Response Message sent back from the Identity Management (IDP Proxy).

```
"id" : "<1>"
"type" : "RESPONSE",
"from" : "domain://<idp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"body" : { "code": 200, "value": "<JWT Token>" }
```


#### generate Assertion

Message sent by the Identity Module function to Identity Management (IDP Proxy) to generate an Identity Assertion.

```
"id" : "2"
"type" : "EXECUTE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"to" : "domain://<idp-domain>",
"body" : { "resource" : "/identity/<user identifier>", "method" : "generateAssertion" , "params" : { ["contents" : "<contents-value>", "origin" : "<origin-value>", "usernameHint" : "<usernameHint-value>"] }
```

Response Message sent back from the Identity Management (IDP Proxy).

```
"id" : "<2>"
"type" : "RESPONSE",
"from" : "domain://<idp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"body" : { "code": 200, "value" : <JWT Token> }
```

#### generate Assertion

Message sent by the Identity Module function to Identity Management (IDP Proxy) to validate an Identity Assertion.

```
"id" : "3"
"type" : "EXECUTE",
"from" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"to" : "domain://<idp-domain>",
"body" : { "resource" : "/identity/<user identifier>", "method" : "validateAssertion" , "params" : { ["assertion" : "<assertion-value>", "origin" : "<origin-value>"] }
```

Response Message sent back from the Identity Management (IDP Proxy).

```
"id" : "<3>"
"type" : "RESPONSE",
"from" : "domain://<idp-domain>",
"to" : "hyperty-runtime://<sp-domain>/<runtime-instance-identifier>/id-module",
"body" : { "code": 200, "value" : "<boolean?>" }
```
