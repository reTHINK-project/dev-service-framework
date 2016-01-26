P2P Data Synchronisation: Reporter - Observer Model
---------------------------------------------------

The usage of Data synchronisation models in [Web Frameworks](https://www.meteor.com/ddp) looks very promising and is becoming very popular. The usage of the emerging [object.observe](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) javascript API is making it even more effective. However, current solutions require server-side databases that has an impact on performance and scalability.

Hyperty Reporter - Observer communication pattern goes beyond current solutions by using a P2P Synchronisation of JSON Data Objects.

Full two way distributed synchronisation raises serious challenges difficult to handle when we have to deal with concurrency. For example when two diferent hyperty instances change the same synchronised at "the same time" creating inconsistencies between the two objects.

To overcome this problem, with Reporter - Observer communication pattern, writing permissions is only granted to JSON Data Object owner (creator).

The following Terminology is used:

**Reporter hyperty** creator of the object is allowed to change the object. Only one hyperty instance reporter per Synched object instance.

**Observer hyperty** is not allowed to change objects

![Reporter-Observer Communication Pattern](reporter-observer.png)

### Parent - Children Resources

In order to allow use cases like Group Chat where all involved Hyperties are able to write JSON Data, the Parent - Child Data Sync Objects are introduced.

A Data Object Child belongs to a Data Object Parent resource and can be created by any Observer of the Data Object Parent as well as by its Reporter. The Reporter - Observer rules still applies to Data Object Child ie there is only one Reporter that can update the Data Object Child, which can be an Observer of the Data Object Parent, as mentioned earlier. However, the procedures to manage Data Object Child are different from the ones used to manage Data Object Parents. At this point, Data Object Child can't also be a Data Object Parent of another object. Ie Hyperty Data Object composition is limited to one level.

![Parent - Child Sync](parent-child-sync.png)

### Syncher and Sync Manager

Such Model is depicted in the figure below. The Reporter-Observer pattern is supported by the exchange of messages between Reporter Syncher and Observer Syncher defined in the [reTHINK Message Model](../message/readme.md).

![Reporter-Observer Communication Pattern](reporter-observer-pattern.png)

*show how syncher manager, subscription manager and syncer work together using the router network figure*

### Reporter - Observer API

The API to handle the Synchronisation of Hyperty Data Objects is extremely simple and fun to use. The Developer of the Hyperty Reporter just has to create the Data Sync object with the Syncher API, and write on the object every time there is data to be updated and shared with Hyperty Observers.

*Reporter code snippet*

On the Hyperty Observer side, Data Objects are also created with the Syncher API and the emerging [Object.observer() Javascript method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) is used to receive the stream of data changes coming from the Reporter Hyperty.

*Observer code snippet*
