Application Development
-----------------------

\**An Overview of the Application vs Hyperty and an How To with some examples \**

### Application vs Hyperty

A Hyperty is a module of software logic that is dynamically deployed in web runtime environments on end user devices, to execute session control and media flow management in a peer to peer manner. They are ready-to-use modules which can instantiated within the reTHINK runtime. The application will interact with the runtime to take advantage of the funcionality and services of the Hyperties which are instantiated by the runtime when required by the application.

The Developer must includes the reTHINK libraries in the web application. Through the development API, the required Hyperties and Protostubs are downloaded from the Catalogue server. This process is transparent for the developer of the final application, and of course, also for the final user of the application. If the Application requires some functionality or service provided by a hyperty which has not been downloaded and instantiated yet, the runtime can get the code and instantiate it on the fly.

\*Include diagram here\*

### How to use Hyperties

\* Here we can explain how hyperties are being used based on this example from PTIN: https://github.com/reTHINK-project/dev-service-framework/blob/develop/example/demo.js*

In the code there dependecies which won't exist in the future. We can the reader let know this, and that reTHINK team is likely to develop libraries to make easier the interaction with the hyperty.

### How to adapt existing Applications

\* We can include a simple example here of an application using a REST API to exchange chat messages and the same examples using hyperties, does it make sense to you?\*
