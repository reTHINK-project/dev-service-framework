Messaging Oriented Middleware powered by Protofly (Adhoc MOM)
-------------------------------------------------------------

*description of rethink messaging middleware with different levels of messaging routers (msg node, msg bus, sandbox minibus) and how it uses protofly concept*

Hyperties cooperate each other with a Resource Oriented Messaging model implemented by a simple Messaging Middleware, which supports different messaging "pattern" including publish/subscribe and request/response messaging patterns. The higher level [Reporter - Observer communication pattern](p2p-data-sync.md) works on top of these basic messaging patterns. It should be noted, that Developers don't have to use lower level Hyperty Messaging APIs in case the [Hyperty Service Framework](development-of-hyperties.md) is used, notably the Syncher API.

The Message delivery is based on a simple routing functionality - Router - that performs a lookup into the Routing Table for listeners registered to the Message Header "to" field. The Message is posted to all found listeners, which can be other Routers or end-points (Hyperties). Thus, the Hyperty Messaging Middleware is comprised by a network of Routers where each Router only knows adjacent registered Routers or end-points.

![Hyperty Messaging Delivery Network](routing-network.png)

Listeners are programmaticaly registered and unregistered by Routing Management functionalities, which decide the listeners to be added according to higher level view of the Routing Network.

![Hyperty Message Routing Management](routing-management.png)

The Messaging Middleware works at three layers:

At the Runtime Sandbox level where Hyperties are executing, message delivery is provided by the [MiniBUS component](https://github.com/reTHINK-project/dev-runtime-core/blob/master/src/bus/MiniBus.js).

At the Runtime level where Sandboxes are hosted (e.g. in a Browser or in a NodeJS instance), message delivery is provided by the [Message BUS component](https://github.com/reTHINK-project/dev-runtime-core/blob/master/src/bus/MessageBus.js), which is an extension of the MiniBUS.

At Domain Level, message delivery is provided by the Message Node functionality by using the Protofly mechanism (*link to protofly description*), i.e. communication between Message BUS and Message Nodes and among Message Nodes are protocol agnostic. This also means that the Message Node can be provided by any Messaging solution as soon as there is a protostub available (*link to protofly description*).

It is also possible to have P2P communication between Message BUS from different Hyperty Runtime without using any Message Node server (planned for phase 2). P2P Communication between Message BUS will also be based on the protofly mechanism.

![Adhoc Messaging Oriented Middleware Routing Layers](mofly.png)

At runtime level (MessageBUS and MiniBUS), it is used a standard CRUD based [Message Model](../datamodel/message/readme.md) which is easily mapped into Restfull APIs.
