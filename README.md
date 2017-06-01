

reTHINK Service Framework 
-------------------------

#### Build status

| Master                                   | Develop                                  |
| ---------------------------------------- | ---------------------------------------- |
| [![Build Status](https://travis-ci.org/reTHINK-project/dev-service-framework.svg?branch=master)](https://travis-ci.org/reTHINK-project/dev-service-framework) | [![Build Status](https://travis-ci.org/reTHINK-project/dev-service-framework.svg?branch=develop)](https://travis-ci.org/reTHINK-project/dev-service-framework)

-------------------------

- [Overview](#overview)
- [Installation as a NPM Module](#how-to-install)
- [Developers](#developers)

### <a id="note">Note</a>
In order to try speed up the instalation process, we remove the first verification of global modules, so, if you want install this repository, you should install globaly this modules:

```shell
npm install -g karma-cli gulp-cli browserify
```

### <a id="overview">Overview</a>

This repository provides a few Javascript libraries that are used across the full reTHINK framework including libraries to support the development of Hyperties, Protostubs and the Runtime . The full specification of these libraries are provided [here](https://github.com/reTHINK-project/specs/tree/master/service-framework)

#### <a id="how-to-install">Installation as a NPM Module;</a>

How to include this repository in other software parts, like [dev-runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser), [dev-runtime-node](https://github.com/reTHINK-project/dev-runtime-node) or [dev-runtime-core](https://github.com/reTHINK-project/dev-runtime-core);

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

### <a id="how-to-contribute">How to contribute</a>

This section provides guidelines on how to contribute to reTHINK Service Framework. Contributions to other reTHINK components should follow its own guidelines:

- [Hyperty Core Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-core/blob/master/readme.md#developer-view);
- [Hyperty Browser Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-browser);
- [Hyperty Nodejs Runtime Development guidelines](https://github.com/reTHINK-project/dev-runtime-nodejs);
- [Development guidelines for new Hyperty Runtime Platforms](https://github.com/reTHINK-project/dev-runtime-core/blob/d3.2-working-docs/readme.md#browser-runtime);
- [Vertx Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-vertx);
- [Matrix Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-matrix);
- [NodeJS Message Node Development guidelines](https://github.com/reTHINK-project/dev-msg-node-nodejs);
- [Development guidelines for new Message Nodes](docs/manuals/development-of-protostubs-and-msg-nodes.md);

### <a id="developers">Developers</a>

```shell
npm test # start the karma tests
npm run test:lint # check the code if respect the codestyle
npm run build:doc # generate/update documentation
npm run build:dev # build the service framework modules into bundles to be used on development environment
npm run build:prod # build the service framework modules into bundles to be used on production environment
```
