# Examples

This contains some working examples of Hyperties

### Hyperty Connector

The example of hyperty connector is running on files **[index.html](index.html)/[demo.js](demo.js)** and we can send message and make a WebRTC call between remote hyperties through the vertx;


### Hypery Chat

The example of hyperty chat is running on files **[index2.html](index2.html)/[demo2.js](demo2.js)** and allow you send messages to a group of persons, in this example you can invite 2 persons, but if you have other person which want to join, you can share the resource url and they can join.

## Running the examples

These examples have an dependecy from [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain) for communication between hyperties in two distinct browsers or tabs. **At this moment you need run locally [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain)**

How can start the example:

1. you need, in the root folder, run command: ```npm start```
2. in your browser, access to:
 - Hyperty Connector: [http://127.0.0.1:8080/example](http://127.0.0.1:8080/example)
 - Hyperty Chat: [http://127.0.0.1:8080/example/index2.html](http://127.0.0.1:8080/example/index2.html)

This examples works over https protocol, but how we are running in the 127.0.0.1, this address is considered secure for webRTC;
