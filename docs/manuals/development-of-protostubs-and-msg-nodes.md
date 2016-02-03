Message Node and Protostubs Development
---------------------------------------

**Introduce an Overview of the Messaging Architecture, the Protocol on the fly Concept, the Message Model, Protostub APIs, Message Node functionalities and main Procedures**

### Overview

The protocol stubs play a central role in the protocol on-the-fly concept. A stub is the piece of code that a reTHINK runtime downloads, instantiates and executes on-the-fly in order to exchange messages with a backend system from a foreign or even from the own domain. From the runtime's point of view the stub is the required "glue" between the reTHINK Message Model and the backend domain's protocols. The stub implements a well defined interface for the bi-directional asynchronous exchange of messages and hides all potential complexity of protocol translations for the interoperability with the backend domain.

The communication endpoint of a stub in a domains backend is the Messaging Node (MN). The MN and the stub build a unit that shall be designed and implemented together. The implementor of a protocol stub and the corresponding MN has to take some decisions. How much of the potential complexity shall be placed in the stub itself? Shall the stub do everything that is necessary to translate the protocol to the backend domains specifics? Or shall the stub just forward messages and let the MN perform the major tasks of the protocol translations?
These are some hints that the developer should take into account:

1. Does the stub have dependencies to additional libraries? This might blow up the size of the stub and may complicate its deployment. Perhaps there is a chance to avoid some external dependencies?
2. Do any parts of the stub and it's dependencies underly special restricting licenses or do they contain code that holds intellectual properties that shall be protected? Since the code is downloaded to an unknown, "strange" environment this might be an issue.
3. How much resources (network, processing, memory  etc.) does the stub require? Are these requirements compatible with all addressed runtime platforms?

These questions shall be kept in mind, when the design decisions for a stub/MN couple are made.
If one of the above questions can be answered with yes, then it might perhaps be an option to implement a basic stub that uses a simple connection mechanism like a WebSocket or similar to forward the reTHINK messages directly to the MN. In this case the MN itself would be responsible for the required protocol translations on the server side for its domain.

An example for such a situation is the Matrix.org based MN and its stub [TODO: add reference] - which have been realized in the scope of this project. The decision was made to let the stub just forward reTHINK messages and therefore keep it simple and small. The implementation of the Matrix.org client logic was done on the MN side.
If the stub would have implemented a full Matrix.org client, there would have been a set of dependent SDK-libraries with their own set of dependencies each. Furthermore a Matrix.org client produces additional overhead traffic that should be restricted to the MN internal system and therefore be kept away from the runtime device.

### Messaging Model

#### General message format
A reTHINK message is a standard JSON Object with a fixed set of header fields and a variable message body. These are the common header fields:

| name  | type | description |
| ------------- | ------------- | ------------- |
| id | numeric | an identifier used to associate RESPONSE messages to the initial REQUEST message. It should be noted that the REQUEST.id MUST be incremented every time a new REQUEST message is created.|
| from | [URL](https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/address/readme.md) | URL of a Hyperty instance or user associated with it |
| to | [URL](https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/address/readme.md) | One or more [URLs](https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/address/readme.md) of Message recipients. According to the URL scheme it may be treated in different ways by the MN.|
| body | JSON-Object | The message body according to the type that is identified by the type attribute in the message header. |

#### Message Body

The Message Body is a JSON object that varies according to the message type, specified in the message header. Currently following types of  Message bodies are specified in the reTHINK specification:

- CreateMessageBody
- ReadMessageBody
- UpdateMessageBody
- DeleteMessageBody
- ForwardMessageBody
- ResponseMessageBody

Optionaly, all message bodies can contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module before the message is routed to protostubs.
When these message bodies reach the destination runtime MessageBUS, the JWT tokens are decoded and verified by the Identity Module. The result of this process (if successful) is inserted in the MessageBody as assertedIdentity objects and the JWT tokens removed, before the message is delivered to the Hyperty. AssertedIdentity is compliant with User Identity Data Model.

Detailed specifications of these Message bodies can be found at [Message Model](https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/message/readme.md).

#### Request - Response transactions

A Response to a Request message should follow this rule:

    Response.from = Request.to
    Response.to = Request.from
    Response.id = Request.id

The Request.id MUST be incremented every time a new Request message is created.

### APIs
#### The ProtoStub API

The interface that a protocol stub has to implement is kept very small and simple by intent.

A protocolStub is constructed with a set of parameters that ensures that the stub can be uniquely identified, can connect to its backend Messaging Node and can communicate with the messaging bus in the runtime.

```
new ProtoStub(runtimeProtoStubURL, busPostMessage, configuration)
```

*Parameters:*

| name  | type | description |
| ------------- | ------------- | ------------- |
| runtimeProtoStubURL  | URL.RuntimeURL | A URL allocated by the runtime that uniquely identifies this protocolStub. |
| busPostMessage | Message.Message (???) |  The runtime BUS postMessage function to be invoked on messages received by the protocol stub. |
| configuration | ProtoStubDescriptor.ConfigurationDataList | Configuration data that is retrieved from the protocolStub descriptor. This data is implementation-specific and ensures that the Stub can address and connect its own Messaging Node.|

##### Methods
The connect method establishes the connection between the protocol stub and the backend messaging node.
```
connect(identity)
```
**Note:**
The "connect" method will not be directly invoked by the runtime implementation. Rather it is expected that the stub maintains its connection state internally. Whenever the runtime intents to send a message via the postMessage method, the stub shall auto-connect to the Messaging Node and attempt to keep this connection open until it explicitely receives a "disconnect" invocation.

*Parameters:*

| name  | type | description |
| ------------- | ------------- | ------------- |
| identity | IDToken | An optional identity token that can be used to authenticate this stub connection against the backend messaging node|

The disconnect method is used to explicitely disconnect a stub from its messaging node. Such a disconnect can be used to release and clean up resources in the stub and also on the backend side in the messaging node.
```
disconnect()
```

The postMessage method is used by the runtime to send messages through the protocol stub to connected backend server.
```
postMessage(message)
```

| name  | type | description |
| ------------- | ------------- | ------------- |
| message | Message.Message | The message to be dispatched by the protocol stub.|

##### Events

A protocol stub emits events to communicate its own connection state to the runtime. Whenever the stub gets connected or disconnected, it uses the "busPostMessage" to send a message to the runtimes message bus.
These Event messages are defined as follows:

```
{
  "type": 'update',
  "from": runtimeProtoStubURL,
  "to": runtimeProtoStubURL + '/status',
  "body": {
    "value": "connected|disconnected"
}
```

The runtimeProtoStubURL is the URL that was provided as first parameter of the Stub constructor. The value in the message body is either "connected" or "disconnected".

#### What else (?)

### Message Node functionalities
- take from msg-node architecture at https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/msg-node/msg-node-architecture.md

### Messaging Procedures
describe main flow as UML for:
- stub connection
- message routing

### Protostub Source Code Examples
#### Auto connect mechanism
#### integration with the Messaging Bus of the Runtime
