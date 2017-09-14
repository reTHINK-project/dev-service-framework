

reTHINK Service Framework 
-------------------------

#### Build status

| Master                                   | Develop                                  |
| ---------------------------------------- | ---------------------------------------- |
| [![Build Status](https://travis-ci.org/reTHINK-project/dev-service-framework.svg?branch=master)](https://travis-ci.org/reTHINK-project/dev-service-framework) | [![Build Status](https://travis-ci.org/reTHINK-project/dev-service-framework.svg?branch=develop)](https://travis-ci.org/reTHINK-project/dev-service-framework)

-------------------------

## Service Framework Overview

This repository contains the source code of libraries that are used to facilitate the development of Hyperties and Protostubs.


* **Hyperty** is a secure user associated microservice, which can be deployed either on a web runtime environment, on an end-user device or on a networked server.

* **Protostubs** are implementations of protocol stacks that are dynamicaly loaded by the Hyperty Runtime to support adhoc cross domain interoperbility among Hyperties without the need of federation or standardisation of network protocols.

In case you want want to know more details about reTHINK, have a look [here](https://rethink-project.github.io).

## <a id="how-to-install">Installation as a NPM Module;</a>

How to include libraries from this repository in other software components, like Hyperties, Protostubs, [dev-runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser), [dev-runtime-node](https://github.com/reTHINK-project/dev-runtime-node) or [dev-runtime-core](https://github.com/reTHINK-project/dev-runtime-core);

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


If you have problems with the `npm install` service framework module, you should check [Github Help](https://help.github.com/articles/generating-ssh-keys/). and select the operation system you are using.

## <a id="developers">Guidelines for Developers</a>

```shell
npm test # start the karma tests
npm run test:lint # check the code if respect the codestyle
npm run build:doc # generate/update documentation
npm run build:dev # build the service framework modules into bundles to be used on development environment
npm run build:prod # build the service framework modules into bundles to be used on production environment
```

### <a id="note">Note</a>
In order to try speed up the instalation process, we remove the first verification of global modules, so, if you want install this repository, you should install globaly this modules:

```shell
npm install -g karma-cli gulp-cli browserify
```

