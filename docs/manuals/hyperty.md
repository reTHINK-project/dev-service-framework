Hyperties are cooperative [Microservices](http://martinfowler.com/articles/microservices.html) that are executed as much as possible in devices on behalf of users through simple but sophisticated Identity Management techniques. This means, Hyperties are independently deployable components each one providing a small set of business capabilities, using the *smart endpoints and dumb pipes* philosophy i.e. Hyperties don't depend on complex and sophisticated communication middleware like Enterprise Service BUS (ESB). Instead, Hyperties rely on a very light but powerful [Messaging Oriented Middleware powered by the Protofly](momfly.md) concept (*we should find a good name for this: MOMFly?*).

On the other side, Hyperties follow emerging [Edge](https://en.wikipedia.org/wiki/Edge_computing) and [Fog](https://en.wikipedia.org/wiki/Fog_computing) computing paradigms as opposed to more popular Cloud Computing. This means, when compared with Cloud Computing, Hyperties promotes a more effective usage of computing and network resources, decreases communication latency, improves security and extends scalability.

![Hyperty Concept and Edge Computing](hyperty-concept1.png)

It should be noted, however, that Hyperties can be executed in Network Edge Servers for specific Business Capabilities (e.g. Media Servers) or when End-user devices don't have enough capabilities eg in terms of computing resources and/or power.

In addition, Hyperties have some unique characteristics including:

-	An Hyperty only makes sense if there is another Hyperty to cooperate with
-	The User Identity associated to an Hyperty is decoupled from the Hyperty Service Provider. The end-user has the power to decide which is the Identity to be securely associated to an Hyperty.
-	Hyperties are agnostic of Network Protocols thanks to the Protofly concept
-	Hyperties are executable in existing Web Runtimes including Web Browsers and Nodejs without requiring the installation of any new software in the device. This means, Hyperties can be deployed **today** in billions of devices making negligible the Hyperty adoption friction. It should be noted, however, that Hyperties can be developed in other programming languages besides Javascript, in case it is supported by the Hyperty Runtime.
-	Hyperties can easily cooperate with Hyperties from other domains with no federation required. By using the Reporter-Observer communication pattern, Hyperties only have to agree on a common schema for one or more JSON Data Objects, in order to be able to cooperate each other.

![Reporter-Observer Communication Pattern](reporter-observer.png)

-	Hyperties can be used on any Application Domain, but they are specially suitable for Real Time Communication Apps (eg Video Conference and Chat) as well as IoT Apps.

**Examples**
