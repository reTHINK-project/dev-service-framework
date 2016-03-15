reTHINK Service Framework
-------------------------

-	[Overview](#rethink-framework-overview)
-	[Getting Started](#getting-started)
-	[Contribute to reTHINK](#how-to-contribute)

### ReThink Framework Overview

reTHINK provides a Javascript framework to build and deliver Real Time Communication Microservices in end-user devices (browsers and standalone mobile apps) and in Network edge servers (NodeJS):

* Hyperty:
* Protocol on-the-fly:
* Trustful:


Very soon we will provide a live public reTHINK environment, to let you publish and try your Hyperties or Apps without the need to install anything. Demos with Apps and Hyperty examples are provided below.

### Quick Start

Just a few couple of lines are required for the reTHINK Hello World. First you need the Hello World Reporter, and its `hello()` function that is used to create the Hello Data Object (`helloObjtReporter` which descriptor is at `_objectDescURL`) and invite an Hello World Observer (`hypertyURL`):

```
  return new Promise(function(resolve, reject) {

    syncher.create(_this._objectDescURL, [hypertyURL], hello).then(function(helloObjtReporter) {

        helloObjtReporter.onSubscription(function(event) {

        // All subscription requested are accepted

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

The Hello World Observer is invited (`event.url` contains the Hello Data Object URL) to subscribe the Hello Data Object (helloObjtObserver):

```
 syncher.subscribe(_this._objectDescURL, event.url).then(function(helloObjtObserver) {

  // lets notify the App the subscription was accepted with the most updated version of Hello World Object

  _this.trigger('hello', helloObjtObserver.data);

...

```

Any change done in the Hello Object by the Reporter:

```
helloObjtReporter.data.hello = "Bye!!";

```

.. will be received by the Observer:

```
...
// lets now observe any changes done in Hello World Object

helloObjtObserver.onChange('*', function(event) {

  // lets notify the App about the change
  _this.trigger('hello', helloObjtObserver.data);

});

}).catch(function(reason) {
console.error(reason);
});
```

You may find all the HelloWorld source code [here](/examples).

In order to execute the HelloWorld Hyperties, ensure you have npm, jspm and gulp globaly available in your environment.

The provisioning of Hyperties in the Catalogue is done by a gulp task (at this point you have to make a change in the file to trigger the provisioning process):

`gulp watch-hyperty --dest=resources`

The DataSchema of the HelloWorld Data Object is already provisioned but if you want to do it yourself run:

`gulp encode`

and select "HelloWorldDataSchema"

Change your hosts file to point to your `localhost` the name `hybroker.rethink.ptinovacao.pt`. This will allow you to use the back-end (Messaging Node and Domain Registry) provided by PT Inovação. But you are free to [deploy your own back-end](). Then start the Local Catalogue server and Web Application Server:

`npm start`

In case you have problems starting the HTTPS server pls ensure there is no other service using HTTPS port 443 (eg Skype). If the problem persists, execute:

`http-server --cors -S -p 443 -C rethink-certificate.cert -K rethink-certificate.key`

Now, open two windows with your favorite browser at `https://localhost/examples/`. In one select "Hello World Reporter" and in the other one select "Hello World Observer". Authorise the usage of your Google Identity (currently that's the only supported IDP). The HypertyURL  of deployed Hyperties will be displayed in each window. Copy the Observer HypertyURL and paste in the Reporter Window "Invite Hyperte:". Click say hello. You should see "Hello World!!" in the Observer Window together with your Identity Name. Click "Bye" in the Reporter Window. You should see "Byes!!" in the Observer window.

Did you like it? Do you want to learn more about reTHINK and Hyperties? Have a look at the [tutorials](docs/manuals).

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

**New Way**

To import the dev-service-framework modules now you need to do:
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
```javascript
import {Syncher, MessageFactory} from 'service-framework';

console.log('Syncher: ', Syncher);
console.log('MessageFactory: ', MessageFactory);

```

At this moment, both methods are supported, but the **"old way"** only will be supported until the runtime-core and other repositories update to the **"new way"**;

if you have problems with the `npm install` service framework module, you may need following the steps present on [Github Help](https://help.github.com/articles/generating-ssh-keys/). and select operation system you are using.
#### Setup Environment

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

 - [Documentation](#documentation)
 - [License](#license)
 - [Dist](#dist)
 - [Build](#build)
 - [Encode](#encode)
 - [Watch Hyperty](#watch-hyperty)
 - [Build Hyperties](#build-hyperties)
 - [Watch](#watch)

##### <a id="documentation">Documentation</a>

To generates api documentation you can run

```
gulp doc
```

###### <a id="license">License</a>

Append to all files in src folder the license text;

Run the command:`
gulp license
`

###### <a id="dist">Dist</a>

To distribute the runtime-core, you can make a distribution file.

Run the command:

```shell
gulp dis
```

###### <a id="build">Build</a>

To distribute the runtime-core, but with the source code maps, and to detect where is some error.

Run the command:

```shell
gulp build
```

###### <a id="encode">Encode</a>

In this repository, we have some tasks which can help you. If you need change some resource file, like an Hyperty or ProtoStub, and load it to the Hyperties.json or ProtoStubs.json, run the following command, and answer to the questions;

```shell
gulp encode
```

you need to answer this questions: File to be converted? > resources/VertxProtoStub.js

Configuration file like an object or url to ProtoStub have on configuration: > something like:
```json
{
  "url": "wss://msg-node.localhost:9090/ws"
}
```
or an empty object
```json
{}
```

This will be a default file to be loaded? (yes/no) > yes or no

// TODO: optimize this to read if it is an hyperty or protocol stub;

###### <a id="watch-hyperty">Watch Hyperty</a>

If you need change some resource file, like an Hyperty, you need run this task first. This task will be covert ES6 to ES5 and encode the Hyperty file changes in a base64 file and add it to the descriptor folder in the respective place;

in your command line run:
```shell
gulp watch-hyperty --dest=resources
```

###### <a id="build-hyperties">Build Hyperties</a>

At this moment, the hyperties are placed on src folder, but will be moved for examples folder;

If you need change some resource file, like an Hyperty, you need run this task first. This task will be covert ES6 to ES5 and encode the Hyperty file changes in a base64 file and add it to the descriptor folder in the respective place;

in your command line run:
```shell
gulp build-hyperties --dest=resources
```

###### <a id="watch">Watch</a>

if you need watch all changes on src folder and convert them to a dist file, run:

```
gulp watch
```

This will convert all the files from ES6 to ES5 and update the distribution file;

#### Unit Testing

Unit testing can be launched manually with **karma start**.

~~It's advisable to use [expect.js](https://github.com/Automattic/expect.js) instead of assert.~~

After investigate and testing the [expect.js](https://github.com/Automattic/expect.js) it don't support some features for ES6, because this tool hasn't activity at some time, that is why, it is recomended use the [chaijs](http://chaijs.com/) it is more versatile and have expect.js (but updated) and others tools that can be useful;

The address data factory can be tested independently by calling

```
cd <base folder>/test
mocha addressFactoryTest.js
```

#### <a id="example">Example</a>

*to be moved to My First reTHINK Applications?*

**NOTE:** While this example folder isn't moved, you need to do the following:

 - On linux, run with `sudo`,
 - On Windows, execute the terminal with administration permissions;

Install and run http-server:
```shell
npm install -g http-server
# or
npm install

# after installed
npm start;
```

This repository have a folder with an working example of Hyperty Connector and we can send message and make a WebRTC call between remote hyperties through the vertx;

To run the demo on example folder: - this example have a dependecy from [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain) for communication between hyperties in two distinct browsers or tabs. **At this moment you need run locally [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain)** - you need, in the root folder, run command: `npm start` - in your browser, access to https://127.0.0.1:8080/example

This example works over https protocol, but since we are running in the 127.0.0.1, this address is considered secure and the webRTC will works well;
