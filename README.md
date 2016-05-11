reTHINK Service Framework
-------------------------

-	[Overview](#rethink-framework-overview)
-	[Getting Started](#quick-start)
-	[Installation as a NPM Module](#installation-as-a-npm-module)
-	[Contribute to reTHINK](#how-to-contribute)

### ReThink Framework Overview

reTHINK provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* **Hyperty** is similar to an Agent or a Bot that performs tasks on user's behalf, by communicating through P2P Data Synchronisation with other Hyperties. Some examples (see demos), are:

  - the Hyperty Connector that uses WebRTC to manage video calls between users;

  - the Group Chat Hyperty (name says it all);

  - the myBracelet Hyperty, is a sensing Hyperty that encapsulates a Bracelet, by collecting and publishing data from it

  - the myContext Hyperty is a Big Data Hyperty that uses data published by different sensing Hyperties (like the myBracelet Hyperty) to infer and calculate more meaningful Contextual data about the user.

* **Protocol on-the-fly** is used by Hyperties to support seamless interoperability without the need of federation or standardisation of network protocols

* Hyperties are **Trustful**. Hyperties are decoupled from the User Identity, which can be securely asserted by existing IDPs (Identity Provider), when communicating with other Hyperties.

In case you want want to know more details about reTHINK, have a look [here](docs/tutorials/readme.md)

### Quick Start

The first thing you need for the quick start, is to setup up your development environment and play around with some available tutorials that highlight the main reTHINK concepts. These Information can be found in the links below.  
* [Quick Setup Guide](https://github.com/reTHINK-project/dev-hyperty-toolkit)
* [Tutorials](https://github.com/reTHINK-project/dev-hyperty-toolkit/docs/tutorials/readme.md)


#### <a id="how-to-install"></a>Installation as a NPM Module;

How to include this repository in other software parts, like [dev-runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser), [dev-runtime-node](https://github.com/reTHINK-project/dev-runtime-node) or [dev-runtime-core](https://github.com/reTHINK-project/dev-runtime-core);

```shell
jspm install
```

or

```shell
npm install
```

To import the dev-service-framework modules:
```javascript

// This is the default class exported;
import CatalogueFactory from 'service-framework/dist/CatalogueFactory';

// This is the other classes exported
import {HypertyDescriptor, ProtocolStubDescriptor, SourcePackage} from 'service-framework/dist/CatalogueFactory';

// or
import MessageFactory from 'service-framework/dist/MessageFactory';

// or
import {Syncher, DataObjectReporter, DataObjectObserver} from 'service-framework/dist/Syncher';

```

**Old Way - Depreciated!!!**

Another way to import classes from the Service Framework that will be only supported until the runtime-core and other repositories are update to the **"new way"**:

```javascript
import {Syncher, MessageFactory} from 'service-framework';

console.log('Syncher: ', Syncher);
console.log('MessageFactory: ', MessageFactory);

```

If you have problems with the `npm install` service framework module, you should check [Github Help](https://help.github.com/articles/generating-ssh-keys/). and select the operation system you are using.

### How to contribute

This section provides guidelines on how to contribute to reTHINK Service Framework. Contributions to other reTHINK components should follow its own guidelines:

-	[Hyperty Core Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-core/blob/master/readme.md#developer-view);
-	[Hyperty Browser Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-browser);
-	[Hyperty Nodejs Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-nodejs);
-	[Development guidelines for new Hyperty Runtime Platforms](https://github.com/reTHINK-project/dev-runtime-core/blob/d3.2-working-docs/readme.md#browser-runtime);
-	[Vertx Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-vertx);
-	[Matrix Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-matrix);
-	[NodeJS Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-nodejs);
-	[Development guidelines for new Message Nodes](docs/manuals/development-of-protostubs-and-msg-nodes.md); -
