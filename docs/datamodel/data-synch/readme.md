### Reporter - Observer Communication Pattern


<!--
@startuml "reporter-observer-pattern.png"


	node "Reporter Hyperty Instance 1" as H1 {

		node "Data Object1" as Obj1 {

		}
	}


	node "Reporter Syncer" as Syncer1 {

	}

	node "Observer Hyperty Instance 2" as H2 {

		node "Data Object2" as Obj2 {

		}
	}


	node "Observer Syncer" as Syncer2 {

	}

	Obj1 -down- Syncer1 : report to syncer

	Syncer1 -down-> Syncer2 : report message

	Syncer1 <-down- Syncer2 : observe message

	Obj2 -up- Syncer2 : observe from syncer

@enduml
-->


The [Hyperty Interoperability](../concepts/interoperability.md) at run time concept is based on a common data object model framework where generic operations like CRUD are applied.

The usage of Data synchronisation models in [Web Frameworks](https://www.meteor.com/ddp) looks very promising and is becoming very popular. The usage of the emerging [object.observe](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) javascript API will make it even more effective.

However full two way distributed synchronisation raises serious challenges difficult to handle when we have to deal with concurrency. For example when two diferent hyperty instances change the same synchronised at "the same time" creating inconsistencines between the two objects.

##### Reporter Observer Communication Pattern

To simplify the problem, a new communication pattern is proposed:
the **Reporter-Observer** pattern.

The main principle is to only grant writing permissions to Object owner (creator). Such principle will require from the Hyperty Runtime to be able to enforce access control to synchronised object according to this rule.

The following Terminology is used:

**Observer hyperty** is not allowed to change objects

**Reporter hyperty**  creator of the object is allowed to change the object. Only one hyperty instance reporter per Synched object instance.

Such Model is depicted in the figure below. The Reporter-Observer pattern is supported by the exchange of messages between Reporter Syncher and Observer Syncher defined in the [reTHINK Message Model](../message/readme.md).

![Reporter-Observer Communication Pattern](reporter-observer-pattern.png)


