Application Development
-----------------------

### Application vs Hyperty

A Hyperty is a module of software logic that is dynamically deployed in web runtime environments on end user devices, to execute session control and media flow management in a peer to peer manner. They are ready-to-use modules which can instantiated within the reTHINK runtime. The application will interact with the runtime to take advantage of the funcionality and services of the Hyperties which are instantiated by the runtime when required by the application.

The Developer must include the reTHINK libraries in the web application. Through the development API, the required Hyperties and Protostubs are downloaded from the Catalogue server. This process is transparent for the developer of the final application, and of course, also for the final user of the application. If the Application requires some functionality or service provided by a Hyperty which has not been downloaded and instantiated yet, the runtime can get the code and instantiate it on the fly.

### How to use Hyperties

*to be provided according to demos*

### How to adapt existing Applications

#### Standard web application
The diagram below shows how a standard application, which interacts with services provided by a service provider, currently looks like. There are several points which are not being considered such as Identity Management issues. If you need to interact with the service provided by CSP A, you need to use the library it provides, you need to authenticate to that specific service and you need to provide the logic in the Web Application to be able to produce and consume data from it.

![Standard App Diagram](standard_app_diagrams.png)

If the Web App need to interact with more than one CSP or service, typically it will need to download as many libraries as services and it may need to authenticate against the service provider with several identities and mechanisms. The code from different CSPs is running on the same sandbox so it can potentially interact with code from other libraries. This risk has been mitigated in the reTHINK architecture. 

On the other side, we have only considered here Web Apps, but services provided by CSPs can be potentially used from a wide range of devices including constrainted devices for M2M application. That is the reason why the reTHINK client libraries has been to be executed also in M2M scenarios where no web broswers are involved. 

####reTHINK application
The diagram below depicts the general architecture of a reTHINK Web App. This diagram has been created for didatic purposes and it does not includes all the elements. For example it does not contain the modules in charge of dealing with identity management.

![reTHINK App Diagram](hyperty_app_diagrams.png)

#####Security: sandboxes
The Web developer does not have to deal with low level details of the architecture. The sandboxes and the management of hyperties and protostubs is done by the core framework. The sandboxes allows to isolate code from different providers reducing the risk of suffering cross-site scripting attacks. 

#####Functionality: hyperties

#####Compatibility: Protostubs

#####Identity management

*app: the idea was trying to give some hints on how to adapt existing Apps in order to be reTHINK enabled avoiding building from scratch a new app*
