*To be moved to dev-toolkit docs?*

## Syncher and SyncherManager
![](SyncherManager.png)

MiniBus is a core component that represents a view of the MessageBus, and it's inserted as a dependency. When an object (Reporter or Observed) is created, the Syncher will add listeners in the MiniBus to receive/send Messages of that object.

[Sequence Diagram Doc](../specs/dynamic-view/data-sync/readme.md)

### SyncherManager
The SyncherManager and other related classes available in the dev-core-runtime/syncher are part of the internal system that manages subscriptions and object creations. There is only one instance of this, at address "<runtimeURL>/sm". This instance is not available directly to hyperties. Only contacted by the message system.

### Interfaces (SyncStatus, SyncSubscription)
*Should be introduced earlier. Description is incomplete*
* **SyncStatus** is used to get and control the status of a DataObject (local, remote, reporter or observer).
* **SyncSubscription** reference to a remote observer/subscription.

**TODO** Maybe some kind of state machine diagram is needed to define better all the status, and the actions that activate the status transitions.

### Methods, Events and Handlers
Every object have methods, and event handlers to map to a pulling and push scheme. 
Methods fire actions and Handlers react to actions and respond accordingly.
All events listed on the class diagram are intercepted in an event handler. From a functional perspective, methods like (accept, reject, wait, ...) are responses to an action. Since actions are represented by events, it makes sense that responses are directly related to them. Some rules:
* All events are inherited from the Event interface
* All handlers have method signature of "on\<classifier\>(..., callback)"

### Syncher
This is the main class where the API is available to hyperties. It is a singleton i.e. only one instance is available per Hyperty instance. It's the owner of all kind of [Data Objects](../../datamodel/data-objects/data-synch) that can be synchronised by the Syncher including Reported Objects (DataObjectReporter) and Observed Objects (DataObjectObserver).

##### Properties
* owner: HypertyURL of Syncher's Hyperty instance
* observers: [DataObjectObserver] Array of Observed Objects
* reporters: [DataObjectReporter] Array of Reported Objects\

##### Methods
* constructor(owner: HypertyURL, bus: MiniBus, config: Config)

**create**

`create(schema: SchemaURL, observers?: [HypertyURL], initialData: JSON): Promise<DataObjectReporter>`

This Method is used to create objects to be reported i.e. the Hyperty Instance plays the Reporter role. The following parameters are used:

* schema: Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
* observers: array of Hyperty instances that are invited to be an observer of the new Data Object
* initialData: data that is used to initialise the new Data Object
* return: Promise to a new Reporter. The reporter can be accepted or rejected by the PEP

**subscribe**

`subscribe(schema: SchemaURL, url: ObjectURL): Promise<DataObjectObserver>`

This Method is used to subscribe objects to be observed i.e. the Hyperty Instance plays the Observer role. The following parameters are used:

* schema: Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
* url: the URL of the Data Object to be observed
* return: Promise to a new observer if accepted. It's associated with the reporter.

**read**

`read(url: ObjectURL): Promise<JSON>`

This Method is used to read an existing object i.e. the Hyperty Instance does not play the Observer role nor the Reporter role. The following parameters are used:

* url: the URL of the Data Object to be read
* return: Promise to last available data of the reporter

##### Event Handlers

**onNotification**

`onNotification(callback: (event: CreateEvent | DeleteEvent) => void): void`

Receive create invitations or delete notifications from Reporter objects. Hyperties should listen and respond accordingly, using the event methods. Invitations are sent thought Syncher.create(..) or DataObjectReporter.inviteObservers(..)

* callback: callback function to receive create and delete events. 

### DataObject
Top implementation of Data Object Reporters and Observers with common properties, methods and handlers.

##### Properties
* url: ObjectURL
* data: JSON data syncronized with the associated remote Reporter or Observer
* schema: SchemaURL
* children: { \<childId\>: DataObjectChild }

##### Methods

**addChild**

`addChild(resource: string, initialData: JSON): Promise<DataObjectChild>`

Create and add a children to the subscription group. 

* resource: resource name (child channel name), one of the items in the schema.properties.scheme of the parent object.
* initialData: Initial data of the child
* return: Promise to a new DataObjectChild.

##### Event Handlers

**onAddChild**

`onAddChild(callback: (event: CreateEvent) => void): void`

Setup the callback to process create and delete of remote childrens. Remote childrens are any created child from an associated Reporter or Observer.

* callback: callback function to receive child create and delete events.

### DataObjectReporter
Read/Write reporter object. Syncronization is shared with other observers.

##### Properties
* (inherited) status: on | paused | waiting
* subscriptions: [SyncSubscription]

In addition to the inherited properties, it has a registry of all remote observers subscriptions. Since all subscriptions are instances of SyncSubscription, it's possible to read the status of the subscription and act on it (pause, resume, stop). For example, in a chat room it will be possible to kick out someone executing the stop().

##### Methods

**inviteObservers**

`inviteObservers(observers: [HypertyURL])`

Send invitations (create messages) to hyperties, observers list. Invitations do not associate a Reporter/Observer. An explicit subscription must be sent from the Observer.

* observers: array of hyperties to invite

##### Event Handlers

In addition to the inherited handlers, the reporter can listen to subscriptions/unsubscriptions and responses to invitations sent to observers. It also can accept or reject read requests.

**onSubscription**

`onSubscription(callback: (event: SubscribeEvent | UnSubscribeEvent) => void)`

Setup the callback to process subscribe and unsubscribe notifications

* callback: callback function to receive events

**onResponse**

`onResponse(callback: (event: ResponseEvent) => void): void`

Setup the callback to process response notifications of the create (invite) request's. These are responses to `DataObjectReporter.inviteObservers` or `Syncher.create` invocation.

* callback: callback function to receive events

**onRead**

`onRead(callback: (event: ResponseEvent) => void): void`

### DataObjectObserver
Read only observer object, giving a data view of a remote reporter object.

##### Properties
* owner: HypertyURL

##### Methods

**unsubscribe**

`unsubscribe()`

Remove this subscription from the reporter database. No more data updates will be received.

##### Event Handlers

**onChange**

`onChange(filter: string, callback: (event: ChangeEvent) => void): void`

Setup the callback to process change events from the associated reporter.

* filter: Filter that identifies the field (separated dot path). Accepts * at the end for a more unrestricted filtering.
* allback: callback function to receive events

### DataObjectChild
Child objects are returned from the `DataObject.addChild`.
DataObjectChild are created in relation to a pre-existent path on the parent object schema.
Child objects can be created from a Reporter or Observer and are shared between them.

##### Properties
* childId: URL
* data: JSON

##### Event Handlers

**onResponse**

`onResponse(callback: (event: ReponseEvent) => void): void`

Setup the callback to process response notifications of the child creates. Responses to `DataObject.addChild`

* callback: callback function to receive events

**onChange**

`onChange(callback: (event: ChangeEvent) => void): void`

Setup the callback to process change events from the associated reporter child.

* callback: callback function to receive events
