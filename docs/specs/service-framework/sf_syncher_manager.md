*To be moved to dev-toolkit docs?*

## Syncher and SyncherManager
![](SyncherManager.png)


MiniBus is a core component that represents a view of the MessageBus, and it's inserted as a dependency. When an object (Reporter or Observed) is created, the Syncher will add listeners in the MiniBus to receive/send Messages of that object.

[Sequence Diagram Doc](../specs/dynamic-view/data-sync/readme.md)

### SyncherManager
The SyncherManager and other related classes available in the dev-core-runtime/syncher are part of the internal system that manages subscriptions and object creations. There is only one instance of this, at address "<runtimeURL>/sm". This instance is not available directly to hyperties. Only contacted by the message system.

### Syncher
This is the main class where the API is available to hyperties. It is a singleton i.e. only one instance is available per Hyperty instance. It's the owner of all kind of [Data Objects](../../datamodel/data-objects/data-synch) that can be synchronised by the Syncher including Reported Objects (DataObjectReporter) and Observed Objects (DataObjectObserver).

##### Properties
* owner: HypertyURL of Syncher's Hyperty instance
* observers: [DataObjectObserver] Array of Observed Objects
* reporters: [DataObjectReporter] Array of Reported Objects\

##### Methods
* constructor(owner: HypertyURL, bus: MiniBus, config: Config)

**create**

`create(schema: SchemaURL, observers?: [HypertyURL], initialData: JSON): Promise\<DataObjectReporter\>`

This Method is used to create objects to be reported i.e. the Hyperty Instance plays the Reporter role. The following parameters are used:

* schema: Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
* observers: array of Hyperty instances that are invited to be an observer of the new Data Object
* initialData: data that is used to initialise the new Data Object

**subscribe**

`subscribe(schema: SchemaURL, url: ObjectURL): Promise\<DataObjectObserver\>`

This Method is used to subscribe objects to be observed i.e. the Hyperty Instance plays the Observer role. The following parameters are used:

* schema: Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
* url: the URL of the Data Object to be observed

If the subscription request is accepted, it returns the Observed Data Object (DataObjectObserver) as a Promise.

**read**

`read(url: ObjectURL): Promise<JSON>`

This Method is used to read an existing object i.e. the Hyperty Instance does not play the Observer role nor the Reporter role. The following parameters are used:

* url: the URL of the Data Object to be read

If the read request is accepted, it returns the Data Object as a Promise.

##### Event Handlers

`onNotification(callback: (event: CreateEvent | DeleteEvent) => void): void`

Receive invitations from Reporter objects. Hyperties should listen and respond accordingly, using the event methods.

*not clear whether this event listener is only triggered by invitations sent by Reporters or by other events eg DeleteEvent*

### DataObject

*missing the description of SyncStatus and SyncSubscription*
Top implementation of Data Object Reporters and Observers.

##### Properties
*to complete*
* url: ObjectURL
* data: JSON
* schema: SchemaURL
* children: { \<childId\>: DataObjectChild }

##### Methods
*to complete*
* addChild(resource: string, initialData: JSON): Promise\<DataObjectChild\>

##### Event Handlers
*to complete*
* onChange(filter: string, callback: (event: ChangeEvent) => void): void
* onAddChild(callback: (event: CreateEvent) => void): void

Handlers to report changes in the reporters that are synchronized with the observer.
*if these events are only caught by the Observer why are they at the top DataObject?*

### DataObjectReporter
Read/Write reporter object. Syncronization is shared with other observers.

##### Properties
*to complete*
* (inherited) status: on | paused | waiting
* subscriptions: [SyncSubscription]

In addition to the inherited properties, it has a registry of all remote observers subscriptions. Since all subscriptions are instances of SyncSubscription, it's possible to read the status of the subscription and act on it (pause, resume, stop). For example, in a chat room it will be possible to kick out someone executing the stop().

##### Event Handlers
*to complete*
* onSubscription(callback: (event: SubscribeEvent | UnSubscribeEvent) => void)
* onResponse(callback: (event: ResponseEvent) => void): void
* onRead(callback: (event: ResponseEvent) => void): void

In addition to the inherited handlers, the reporter can listen to subscriptions/unsubscriptions and responses to invitations sent to observers when the Data Object was created ("create" method). *how can we invite new observers outside the data object creation?*
It also can accept or reject read requests.

### DataObjectObserver
Read only observer object, giving a data view of a remote reporter object.

##### Properties
*to complete*
* owner: HypertyURL

### DataObjectChild
*not clear*
Is a result of the call to "addChild". DataObjectChild are created in relation to a pre-existent path on the parent object schema.

##### Properties
*to complete*
* childId: URL
* data: JSON

##### Event Handlers
*to complete*
* onResponse(callback: (event: ReponseEvent) => void): void
* onChange(callback: (event: ChangeEvent) => void): void

### Events and Handlers
*to complete*
Methods fire actions and Handlers react to actions and respond accordingly.
All events listed on the class diagram are intercepted in an event handler. From a functional perspective, methods like (accept, reject, wait, ...) are responses to an action. Since actions are represented by events, it makes sense that responses are directly related to them. Some rules:
* All events are inherited from the Event interface
* All handlers have method signature of "on\<classifier\>(..., callback)"

### Interfaces (SyncStatus, SyncSubscription)
*Should be introduced earlier. Description is incomplete*
* **SyncStatus** is used to get and control the status of a DataObject (local, remote, reporter or observer).
* **SyncSubscription** reference to a remote observer/subscription.

**TODO** Maybe some kind of state machine diagram is needed to define better all the status, and the actions that activate the status transitions.
