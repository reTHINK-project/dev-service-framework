Messaging Node Messages and URL Addresses
-----------------------------------------

This document specifies standard URL Addresses and Messages to be handled by all reTHINK compliant Message Nodes.

#### Address Allocation Management

Address Allocation Management functionality must have listeners to receive messages for the following addresses:

```
domain://msg-node.<sp-domain>/hyperty-address-allocation
domain://msg-node.<sp-domain>/object-address-allocation
```

### Sync Manager

Sync Manager functionality must have listeners to receive messages for the following addresses:

```
domain://msg-node.<sp1>/sm
```

The following Messages must be supported:

#### [Subscription Message to add Sync listeners to msg node ](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message#subscribemessagebody)\*\*

```
"id" : "1"
"type" : "SUBSCRIBE",
"from" : "hyperty-runtime://<sp1>/<bob-device>/sm",
"to" : "domain://msg-node.<sp1>/sm",
"body" : { "resource" : "comm://<sp1>/<alice>/<123456>" , "schema" : "hyperty-catalogue://<sp1>/dataObjectSchema/<schema123>", "childrenResources" : ["messages"]}
```

### Domain Registry Connector and Protostub

Domain Registry Connector or Protostub must have listeners to receive messages for the following addresses:

```
domain://registry.<sp1>
```

The following Messages must be supported:

**Message to Register new Hyperty Instance**

```
"id" : "1"
"type" : "CREATE",
"from" : "hyperty-runtime://<sp1>/runalice",
"to" : "registry.<sp1>",
"body" : { "value" : {"hypertyDescriptorURL" : "hyperty-catalogue://sp1/hy123", "hypertyURL" : "hyperty://sp1/alice/hy123",
"hypertyRuntimeURL" : "hyperty-runtime://sp1/runalice",
...} }
```

#### Policy Engine
