Message Model
-------------

![Message Data Model](../Message-Data-Model.png)

Header
------

Fields needed to route messages.

#### id

To be used to associate Response messages to the initial request message.

#### type

Message type that will be used to define the Message Body format.

#### from

[URL](../address/readme.md) of Hyperty instance or User associated with it

#### to

One or more [URLs](../address/readme.md) of Message recipients. According to the URL scheme it may be handled in different ways

### Message Body

Optionaly, all message bodies exchanged between different Runtime Messge BUS can contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module before the message is routed to protostubs.

When these message bodies reach the destination MessageBUS, the JWT tokens are decoded and verified by the Identity Module. The result of this process (if successful) is inserted in the MessageBody as assertedIdentity objects and the JWT tokens removed, before the message is delivered to the Hyperty. AssertedIdentity is compliant with [User Identity Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/user-identity).

#### CreateMessageBody

##### value

Contains the created object in JSON format.

##### policy

URL from where access policy control can be downloaded. Examples:

1.	reporter-observer where only reporter can make changes

2.	similar to previous one but observers can request reporters to make changes

Policy to be enforced by Monitor component colocated with Connector sandbox?

#### ResponseMessageBody

##### Code

A response code compliant with HTTP response codes (RFC7231).

##### Description

Description of response code compliant with HTTP response codes (RFC7231).

##### Value

Contains a data value in JSON format. Applicable to Responses to READ MessageType.

##### Source

Contains the original creator of the response. Useful to identify the real source of the response to a one-to-many message delivery ie multiple responses coming coming from different sources.

#### ReadMessageBody

##### attribute

Identifies the attribute in the Object to be read (optional)

##### criteriaSyntax

Defines the criteria syntax used in criteria field. To be used for search purposes. Valid criteria Syntaxes are: "key-value", "mongodb", "sql"(?), ...

##### criteria

Defines the criteria to be used for search purposes. Syntax used to define the criteria is set in the criteriaSyntax.

#### UpdateMessageBody

##### attribute

Identifies the attribute in the Object that is updated (optional)

##### value

Contains the updated value object in JSON format.

#### DeleteMessageBody

##### attribute

Identifies the attribute in the Object that is deleted (optional)

#### FowardMessageBody

##### message

Contains forwarded message.

### Procedures

#### Request - Response transactions

A Response to a Request message should follow this rule:

-	Response.from = Request.to
-	Response.to = Request.from
-	Response.id = Request.id

It should be note, the Request.id MUST be incremented every time a new Request message is created.

**Ask a remote Hyperty Instance to create and observe an object**

```
  MessageType = CREATE
  to = URL of remote Hyperty Instance
  resource = URL of object to be observed
  body = JSON with object to be created
```

In case the object creation is accepted the remote peer replies with:

```
  MessageType = RESPONSE
  to = URL of remote reporter Hyperty Instance
  resource = URL of created object
  body = 200 Ok
```

In addition, it subscribes to observe updates on created object ie to be observer of the created object:

```
  MessageType = SUBSCRIBE
  to = URL of remote reporter Hyperty Instance
  resource = URL of object to be observed
```

In case the reporter wants to cancel the creation request it sends:

```
  MessageType = DELETE
  to = URL of remote observer Hyperty Instance
  resource = URL of object that was request to be observed and is now cancelled
```

If in the meanwhile the reporter receives a subscrition request, it will send a Response message with a "404 NOT_FOUND" code

**QUESTION:** The indication of the "resource" URL would be enough and "to" can be null, or is it needed for routing purposes?

**Report about an Object update**

```
  MessageType = UPDATE
  to = URL of remote Hyperty Instance (optional)
  resource = URL of updated object
  body = JSON with updated attributes of the object identified in the "resource" field
```

The same procedure can be used to publish notifications about a resource in a pub-sub communication, where "to" field would be empty.

**Report about an Object delete**

```
  MessageType = DELETE
  to = URL of remote Hyperty Instance
  resource = URL of deleted object
```

**Request to unobserve an Object**

Observer sends message:

```
  MessageType = UNSUBSCRIBE
  to = URL of remote Reporter Hyperty Instance
  resource = URL of object to be unobserved
```
