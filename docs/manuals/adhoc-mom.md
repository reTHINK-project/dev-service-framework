Messaging Oriented Middleware powered by Protofly (Adhoc MOM)
-------------------------------------------------------------

Hyperties cooperate each other with a Resource Oriented Messaging model implemented by a simple Messaging Middleware. The Hyperty Middleware, supports different messaging "pattern" including publish/subscribe and request/response messaging patterns. The higher level [Reporter - Observer communication pattern](p2p-data-sync.md) works on top of these basic messaging patterns. It should be noted, that [Hyperty Service Framework](development-of-hyperties.md) to be used to create new Hyperties, abstracts Developers from the Hyperty Middleware described in this document including lower level Hyperty Middleware APIs.

The Message delivery is based on a simple Router functionality that performs a lookup for listeners registered to receive the Message (the ["Message.to" Header field](https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/message/readme.md#to) is the only information looked up for). The Message is posted to all found listeners, which can be other Routers or end-points (Hyperties). Thus, the Hyperty Messaging Middleware is comprised by a network of Routers where each Router only knows adjacent registered Routers or end-points.

![Hyperty Messaging Delivery Network](routing-network.png)

Listeners are programmaticaly registered and unregistered by Routing Management functionalities, which decide the listeners to be added according to a higher level view of the Routing Network.

![Hyperty Message Routing Management](routing-management.png)

The Messaging Middleware works at three layers:

At the Runtime Sandbox level where Hyperties are executing, message delivery is provided by the [MiniBUS component](https://github.com/reTHINK-project/dev-runtime-core/blob/master/src/bus/MiniBus.js).

At the Runtime level where Sandboxes are hosted (e.g. in a Browser or in a NodeJS instance), message delivery is provided by the [Message BUS component](https://github.com/reTHINK-project/dev-runtime-core/blob/master/src/bus/MessageBus.js), which is an extension of the MiniBUS.

At Domain Level, message delivery is provided by the Message Node functionality by using the Protofly mechanism (*link to protofly description*), i.e. communication between Message BUS and Message Nodes and among Message Nodes are protocol agnostic. This also means that the Message Node can be provided by any Messaging solution as soon as there is a Protostub available (*link to protofly description*). Currently, a [Vertx Message Node](https://github.com/reTHINK-project/dev-msg-node-vertx), a [Matrix Message Node](https://github.com/reTHINK-project/dev-msg-node-matrix) and a [NodeJS Message Node](https://github.com/reTHINK-project/dev-msg-node-nodejs) are provided.

It is also possible to have P2P communication between Message BUS from different Hyperty Runtime without using any Message Node server (planned for phase 2). P2P Communication between Message BUS will also be based on the protofly mechanism.

![Adhoc Messaging Oriented Middleware Routing Layers](mofly.png)

At runtime level (MessageBUS and MiniBUS), it is used a standard CRUD based [JSON Message Model](../datamodel/message/readme.md) which is easily mapped into Restfull APIs.

### Message Delivery between different Hyperty Runtimes

Communication between the Message BUS and Message Nodes are provided by a Protostub that implements the protocol stack used to interact with the Message Node e.g. JSON over Websockets or a Restfull API Client. Listeners of protostubs are registered in the MessageBUS for a set of Message recipient addresses, usually a Hyperty Domain like `domain://example.com`.

When the MessageBUS is processing a new message and looking up routing paths for an address that is not local (eg `hyperty://example.com/alice-hyperty`), it won't find any registered listeners. In this case, the MessageBUS will ask the Runtime Registry (*point link here*) to resolve the "Message.to" header field. The Runtime Registry will look for registered Protostubs that are able to deliver messages to such non-local address. If successful, the Registry will return the Hyperty Runtime protostub address and the MessageBUS will look up again for the protostub listener registered for its address.
