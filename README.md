# dev-service-framework
(Adopted from dev-core-runtime)

[Example](#example)

### How to install this repository like a NPM Module;

How to include this repository in other software parts, like [dev-runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser), [dev-runtime-node](https://github.com/reTHINK-project/dev-runtime-node) or [dev-runtime-core](https://github.com/reTHINK-project/dev-runtime-core);

```
jspm install service-framework=github:github:reTHINK-project/dev-service-framework@develop
```
or

```
npm install github:reTHINK-project/dev-service-framework#develop --save
```

and on javascript code you need import the script, like other modules;

```
import {Syncher, MessageFactory} from 'service-framework';

console.log('Syncher: ', Syncher);
console.log('MessageFactory: ', MessageFactory);

```

if you have problems with the `npm install` service framework module, you may need following the steps present on [Github Help](https://help.github.com/articles/generating-ssh-keys/). and select operation system you are using.

### Setup Environment
On the first time you are cloning this repository, you need to run the command ```npm run init-setup```;

After running successfully this command you will have 2 folders (node_modules and vendor), these folders are excluded from the commit process, and are only for development.

if you already have the project configured on your machine, you only need run the command ```npm install``` to add new dependencies;

if you have some trouble with the environment, you can open an issue;

Address data factory is based on https://github.com/jsdom/whatwg-url, which transforms the source file with some minor changes. In this project, I have added a rule to perform that changes. Just do:

   npm run-script build


### Javascript Environment
JavaScript code should be written in ES6.
There are direct dependencies from nodejs and npm, these can be installed separately or in conjunction with [nvm](https://github.com/creationix/nvm)

#### dependencies:
* nodejs
* npm
* karma - Make the communication between unit test tool and jenkins. See more on [karma](http://karma-runner.github.io/0.13/index.html)
* mocha - Unit test tool. See more on [http://mochajs.org](http://mochajs.org/)
* jspm - Don't need compile the code, it uses babel (or traucer or typescript) to run ES6 code on browser. Know more in [jspm.io](http://jspm.io/)
* gulp - Automate and enhance your workflow. See more about gulp on [gulp](http://gulpjs.com/)

#### Code Style and Hinting
On the root directory you will find **.jshintrc** and **.jscsrc**, these files are helpers to maintain syntax consistency, it signals syntax mistakes and makes the code equal for all developers.

- [jscs](http://jscs.info/) - Maintain JavaScript Code Style
- [jshint](http://jshint.com/) - Detect errors and potential problems in JavaScript code.

All IDE's and Text Editors can handle these tools.

#### Documentation

To generates api documentation you can run ```gulp doc```

### Unit Testing
Unit testing can be launched manually with **karma start**.

~~It's advisable to use [expect.js](https://github.com/Automattic/expect.js) instead of assert.~~

After investigate and testing the [expect.js](https://github.com/Automattic/expect.js) it don't support some features for ES6, because this tool hasn't activity at some time, that is why, it is recomended use the [chaijs](http://chaijs.com/) it is more versatile and have expect.js (but updated) and others tools that can be useful;

The address data factory can be tested independently by calling

    cd <base folder>/test
    mocha addressFactoryTest.js

### <a id="Tasks">Tasks</a>

In this repository, we have some tasks which can help you.
If you need change some resource file, like an Hyperty, you need run task watch first, to encode the Hyperty file changes in a base64 file and add it to the descriptor folder in the respective place;

in your command line run:
```
gulp watch
```

this is temporary until the dev-catalogue is ready;

### <a id="example">Example</a>

This repository have a folder with an working example of Hyperty Connector and we can send message and make a WebRTC call between remote hyperties through the vertx;

To run the demo on example folder:
 - this example have a dependecy from [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain) for communication between hyperties in two distinct browsers or tabs. **At this moment you need run locally [dev-msg-node-vertx](https://github.com/reTHINK-project/dev-msg-node-vertx/tree/dev-0.2#unit-testing) and [dev-registry-domain](https://github.com/reTHINK-project/dev-registry-domain#dev-registry-domain)**
 - you need, in the root folder, run command: ``` npm start ```
 - in your browser, access to https://127.0.0.1:8080/example

This example works over https protocol, but how we are running in the 127.0.0.1, this address is considered secure and the webRTC will works well;
