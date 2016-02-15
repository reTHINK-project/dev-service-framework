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
In the standard application, the developers needs to know in advance the libraries and versions it has to download to build the aplication. In reTHINK the functionality is provided by hyperties which are dynamically loaded in the runtime on-demand. The interaction with the Hyperties which can be executed in different sandboxes is done through commands and events from the Web application. There are special cases where the Hyperty needs to be executed in the same sandbox as the main web application, for example, when the Hyperty needs to access the WebRTC API. 

#####Compatibility: Protostubs
In a standard Web Application, the developers needs to know in advance with which services providers it will be necessary to interact. The number of protocols an application can speak is limited in implementation time and it can not change without modifying the code. In reTHINK the protocol-on-the-fly concept is used. If you need to interact with a service which uses protocol A, the framework will provide you a piece of code called protostub which will be executed in the right sandbox. This protostub will speak protocol A and it wil expose a common API to the Hyperty. The Web Developer will not need to deal with this complexity.   

#####Identity management.
The identity management is normally be done on a per service basis. There are standard mechanism for authentication and Identity management however not all the services use the same. The reTHINK framework provides a common 

#####Impact at interface level
reTHINK web applications should not have any significant impact at interface level, being impossible for an average user to distinguish between a standard application and a reTHINK application. However there are settings which can be applied to reTHINK libraries which can be exposed to the end user to customize its behaviour. 
