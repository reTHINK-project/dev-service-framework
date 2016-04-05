reTHINK Service Framework
-------------------------

-	[Overview](#rethink-framework-overview)
-	[Getting Started](#quick-start)
-	[Contribute to reTHINK](#how-to-contribute)

### ReThink Framework Overview

reTHINK provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* **Hyperty** is a the so called Javascript Microservice that communicates through P2P Data Synchronisation with mimimum usage of back-end services; A Hyperty must be deployed in a runtime (as mentioned in an end-user device or Network edge server).
* **Protocol on-the-fly** is used by Hyperties to support seamless interoperability without federation or standardisation of network protocols;
* Hyperties are **Trustful**. Hyperties are decoupled from the User Identity, which can be securely asserted by existing IDPs (Identity Provider), when communicating with other Hyperties.

### Quick Start

Just a few couple of lines are required for the reTHINK Hello World. First you need the Hello World Reporter, and its `hello()` function that is used to create the Hello Data Object and invite an Hello World Observer (`hypertyURL`):

```

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
```

The Hello World Observer is invited to subscribe the Hello Data Object (helloObjtObserver):

```
 syncher.subscribe(_this._objectDescURL, event.url).then(function(helloObjtObserver) {

...

```

Any change done in the Hello Object by the Reporter:

```
helloObjtReporter.data.hello = "Bye!!";

```

.. will be received by the Observer:

```
...

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

**Old Way**

Another way to import classes from the Service Framework that will be only supported until the runtime-core and other repositories are update to the **"new way"**:

```javascript
import {Syncher, MessageFactory} from 'service-framework';

console.log('Syncher: ', Syncher);
console.log('MessageFactory: ', MessageFactory);

```

If you have problems with the `npm install` service framework module, you should check [Github Help](https://help.github.com/articles/generating-ssh-keys/). and select the operation system you are using.

#### Setup Environment

*overlap with previous section?*

On the first time you are cloning this repository, you need to run the command `npm run init-setup`;

After running successfully this command you will have 2 folders (node_modules and vendor), these folders are excluded from the commit process, and are only for development.

if you already have the project configured on your machine, you only need run the command `npm install` to add new dependencies;

if you have some trouble with the environment, you can open an issue;

Address data factory is based on https://github.com/jsdom/whatwg-url, which transforms the source file with some minor changes. In this project, I have added a rule to perform that changes. Just do:

npm run-script build

##### Javascript Environment

JavaScript code should be written in ES6. There are direct dependencies from nodejs and npm, these can be installed separately or in conjunction with [nvm](https://github.com/creationix/nvm)

##### dependencies:

-	nodejs
-	npm
-	karma - Make the communication between unit test tool and jenkins. See more on [karma](http://karma-runner.github.io/0.13/index.html)
-	mocha - Unit test tool. See more on [http://mochajs.org](http://mochajs.org/)
-	jspm - Don't need compile the code, it uses babel (or traucer or typescript) to run ES6 code on browser. Know more in [jspm.io](http://jspm.io/)
-	gulp - Automate and enhance your workflow. See more about gulp on [gulp](http://gulpjs.com/)

##### Code Style and Hinting

On the root directory you will find **.jshintrc** and **.jscsrc**, these files are helpers to maintain syntax consistency, it signals syntax mistakes and makes the code equal for all developers.

-	[jscs](http://jscs.info/) - Maintain JavaScript Code Style
-	[jshint](http://jshint.com/) - Detect errors and potential problems in JavaScript code.

All IDE's and Text Editors can handle these tools.

#### <a id="Tasks">Tasks</a>

The following Gulp tasks are available:

 - [Documentation](#documentation)
 - [License](#license)
 - [Dist](#dist)
 - [Build](#build)
 - [compile](#compile)
 - [Encode](#encode)
 - [Watch Hyperty](#watch-hyperty)
 - [Build Hyperties](#build-hyperties)
 - [Watch](#watch)

 **NOTE** This is work in progress and some tasks need to be optimized or removed;


##### <a id="documentation">Documentation</a>

This task is used to generates API documentation:

```
gulp doc
```

###### <a id="license">License</a>

This tasks is used to append to all files in src folder, the copyright notice:

```
gulp license
```

###### <a id="dist">Dist</a>

This task creates the distribution file:


```shell
gulp dis
```

###### <a id="build">Build</a>

*I guess this one is not useful in this repo. remove?*
To distribute the runtime-core, but with the source code maps, and to detect where is some error.

Run the command:

```shell
gulp build
```

###### <a id="compile">Compile</a>

This task converts from ES6 to ES5 and encode it in a base64 format;

*to be completed*

```shell
gulp compile --file=<file>
```

###### <a id="encode">Encode</a>

This task is used to provision different types of resources in the Local Catalogue including in Hyperties, ProtoStubs, IdP Proxies and Object DataSchemas, which are encoded in the "descriptors" dir at Hyperties.json, ProtoStubs.json, IDPProxies.json and DataSchemas.json, respectively.


```shell
gulp encode
```

When this tasks is executed, the user will have to select the file to be encoded. Next, the Configuration file is requested. A configuration file example, is:
```json
{
  "url": "wss://msg-node.localhost:9090/ws"
}
```
If there is no configuration file, you should type:
```json
{}
```

The final question is whether this is a default file? (yes/no) > yes or no

###### <a id="watch-hyperty">Watch Hyperty</a>

This task continuously monitors, changes performed in Hyperties' source code files located at "examples" dir, to automate the provisioning of Hyperties in the Catalogue (see `gulp encode` above).

```shell
gulp watch-hyperty --dest=resources
```

###### <a id="build-hyperties">Build Hyperties</a>

*is this needed?*
If you need change some resource file, you need run this task first. This task will be covert ES6 to ES5 and encode the Hyperty file changes in a base64 file and add it to the descriptor folder in the respective place;

```shell
gulp build-hyperties --dest=resources
```

###### <a id="watch-rethink">Watch Rethink</a>

*I didn't understand this one*
if you need watch all changes in other rethink repository and copy the distribution file to dev-service-framework and encode it, you can use this task;

```
gulp watch-rethink
```

###### <a id="watch">Watch</a>

This tasks convert all the files from ES6 to ES5 and update the distribution file;

```
gulp watch
```

#### Unit Testing

Unit testing can be launched manually with **karma start**.

~~It's advisable to use [expect.js](https://github.com/Automattic/expect.js) instead of assert ().~~

*Ths text below has to be updated:*

After investigate and testing the  because this tool hasn't activity at some time, that is why, it is recomended use the [chaijs](http://chaijs.com/) it is more versatile and have expect.js (but updated) and others tools that can be useful;

The address data factory can be tested independently by calling

```
cd <base folder>/test
mocha addressFactoryTest.js
```
