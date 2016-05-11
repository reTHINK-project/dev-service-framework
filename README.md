reTHINK Service Framework
-------------------------

-	[Overview](#rethink-framework-overview)
-	[Getting Started](#quick-start)
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

The easiert way to set up your development environment for Hyperty development, follow the set up Guide on the dev-hyperty-toolkit. 
Just a few couple of lines are required for the reTHINK Hello World.

```
// This is the Hello World Reporter who owns and reports changes done in the Hello Data Object.

// The `hello()` function is used to create the Hello Data Object
// and invite an Hello World Observer (`hypertyURL`):

    syncher.create(_this._objectDescURL, [hypertyURL], hello).then(function(helloObjtReporter) {

        helloObjtReporter.onSubscription(function(event) {

        // All subscription requests are accepted

        event.accept();
      });

      resolve(dataObjectReporter);

    })
    .catch(function(reason) {
      console.error(reason);
      reject(reason);
    });

  });
}

// This is the "Bye()" function that changes the Hello Object.

helloObjtReporter.data.hello = "Bye!!";

// This change  will be received by the Observer:
```

The Hello World Observer is the Hyperty that observes changes on the Hello Data Object performed by the Reporter:

```
// This is the Hello World Observer who subscribes the Hello Data Object to be synched with it.

 syncher.subscribe(_this._objectDescURL, event.url).then(function(helloObjtObserver) {

// Any change done in the Hello Object by the Reporter will be received by the Observer:

helloObjtObserver.onChange('*', function(event) {

  // Object was changed, let's do something
  console.log('Hello was changed: ', helloObjtObserver.data);

});

```

You may find all the HelloWorld source code [here](/examples).

In order to execute the HelloWorld Hyperties, ensure you have npm, jspm and gulp globaly available in your environment.

The provisioning of Hyperties in the Catalogue is done by a gulp task (at this stage you have to make a change in the file to trigger the provisioning process):

`gulp watch-hyperty --dest=resources`

The DataSchema of the HelloWorld Data Object is already provisioned, but if you want to do it yourself, run:

`gulp encode`

and select "HelloWorldDataSchema"

To avoid the installation of reTHINK back-end (Messaging Node and Domain Registry), you can change your hosts file to point to your `localhost` the DNS name of an existing reTHINK domain like `hybroker.rethink.ptinovacao.pt`. But you are free to [deploy your own back-end](Installation.md). Then start the Local Catalogue server and Web Application Server:

`npm start`

In case you have problems starting the HTTPS server pls ensure there is no other service using HTTPS port 443 (eg Skype). If the problem persists, execute:

`http-server --cors -S -p 443 -C rethink-certificate.cert -K rethink-certificate.key`

Now, open two windows with your favorite browser at `https://localhost/examples/`. In one select "Hello World Reporter" and in the other one select "Hello World Observer". Authorise the usage of your Google Identity (currently that's the only supported IDP). The HypertyURL  of deployed Hyperties will be displayed in each window. Copy the Observer HypertyURL and paste in the Reporter Window "Invite Hyperte:". Click say hello. You should see "Hello World!!" in the Observer Window together with your Identity Name. Click "Bye" in the Reporter Window. You should see "Byes!!" in the Observer window.

Did you like it? Do you want to learn more about reTHINK and Hyperties? Have a look at [tutorials](docs/manuals).

You may find more complex Hyperty WebRTC and Group Chat examples [here](/example).

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

#### <a id="how-to-install"></a>How to install this repository like a NPM Module;

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

