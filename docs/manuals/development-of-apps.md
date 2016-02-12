Application Development
-----------------------

**An Overview of the Application vs Hyperty and an How To with some examples**

### Application vs Hyperty

A Hyperty is a module of software logic that is dynamically deployed in web runtime environments on end user devices, to execute session control and media flow management in a peer to peer manner. They are ready-to-use modules which can instantiated within the reTHINK runtime. The application will interact with the runtime to take advantage of the funcionality and services of the Hyperties which are instantiated by the runtime when required by the application.

The Developer must include the reTHINK libraries in the web application. Through the development API, the required Hyperties and Protostubs are downloaded from the Catalogue server. This process is transparent for the developer of the final application, and of course, also for the final user of the application. If the Application requires some functionality or service provided by a Hyperty which has not been downloaded and instantiated yet, the runtime can get the code and instantiate it on the fly.




### How to use Hyperties

*Here we can explain how hyperties are being used based on this example from PTIN: https://github.com/reTHINK-project/dev-service-framework/blob/develop/example/demo.js*

### How to adapt existing Applications

The diagram below shows how a standar application which interacts with services provided by a service provider looks like currently. There are several points which are not being considered such as Identity Management issues. If you need to interact with the service provided by CSP A, you need to use the library it provides, you need to authenticate to that specific service and you need to provide the logic in the Web Application to be able to produce and consume data from it. 

![Standard App Diagram](standard_app_diagrams.png)

![reTHINK App Diagram](hyperty_app_diagrams.png)


*We can include a simple example here of an application using a REST API to exchange chat messages and the same examples using hyperties, does it make sense to you?*

*app: the idea was trying to give some hints on how to adapt existing Apps in order to be reTHINK enabled avoiding building from scratch a new app*
