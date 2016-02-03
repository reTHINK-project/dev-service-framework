Hyperty Development
-------------------

**Introduce the Hyperty Concept, the Criteria to use or not to use Hyperties, the APIs to be used and code snippets**

### Hyperty Concept
D2.1 defines Hyperty as a secure user associated microservice, which is can be deployed either on a web runtime environment, on an end-user device or on a networked server. The main characteristics of a Hyperty include:

* *Modular*: A Hyperty should be a self contained module providing reusable service logic implementions in form of a script (e.g. a JavaScript file)
* *User association* : A Hyperty instance is associated to a “User” (e.g. Human beings, physical objects, physical spaces, organizations) through an Identity, even if this User can be anonymous in some cases.
* *Data Synchronization Communication*: Hyperties interact with each other through data synch objects by using the Reporter – Observer communication pattern.
* *Protocol Agnostic*: Through the protocol-on-the-fly concept, Hyperties are network protocol agnostic. In other words, the data synchronization communication between Hyperties is not dependent on a specific network protocol. Communication is accomplished via a common data schema that describes the data synch objects used. 
* *GUI independent*: Hyperty should not provide Graphical User Interfaces.
* *APIs*: A Hyperty can expose Javascript APIs within the runtime environment that can to be used by web applications

While designing and specifying service logics, it should be noted that Hyperties are not suitable for all use cases. In some case, making use of a simple resusable JavaScript file as library may suffice. The next section explaines the criteria under which the decision to use a Hyperty or not could apply.

### Criteria to use the Hyperty Concept
These are guidelines to help developers decide if they should provide specific service logic as Hyperty or via a simple JavaScript library. Consider these as guidelines and not misinstruction. Before you embark on a new feature development, ask yourself the following questions: 
* Is the feature delivery directly associated with a user?
* Does the feature delivery involve communication between users?
* Is the feature modular and reusbale on different applications?
* Can the feature be delivered and developed by different stakeholders (i.e domain specific implementation)?

If the answers to the above questions are "YES" then most likely, you should go for the Hyperty Concept. The reTHINK Service Framework is what you want to look at next. The Service Framework provides APIs for developers to facilitate the development of Hyperties. 

### Getting Started with Service
So you have decided for the Hyperty Concept and now ask yourself where to start. This section describes the basic steps any developer needs to undertake to include the Service Framwork into their projects. There are two simple steps to get you started. 

1) Install the Service Framework

```
npm install git+git@github.com:reTHINK-project/dev-service-framework.git#develop --save
jspm install service-framework=github:reTHINK-project/dev-service-framework.git@develop
```

2) Import Module(s)
```
import {Syncher} from 'service-framework';
```
or if you need more than one dependency:
```
import {Syncher, MessageFactory, AddressFactory} from 'service-framework';
```
The next section explains the availble modules and APIs they expose.

### APIs
Here we describe useful functionalities that are exposed by the Service Framework Module, which developers can use in development process.

//TODO: describe the APIs from syncher, minibus.postMessage(), hypertyDiscovery, messageFactory and URLFactory

### Examples
//TODO: Give useful examples 
