ETSI M2M and oneM2M Data Representation
The ETSI M2M xSCL (Service Capability Layer) handles resources associated to the system’s entities following the RESTful paradigm [1, 2]. Applications at different nodes rely on the SCLs to interchange data between each other, monitor other applications, or control devices. ETSI specifications have focused on the hierarchical representation of M2M resources as well as on standard APIs for accessing them by the CRUD (Create, Retrieve, Update and Delete) verbs. The Reachability, Addressing and Repository (xRAR) capability is the cornerstone for ETSI M2M platforms, responsible of data storage and exchange between applications and SCLs. This capability include also the subscription/notification mechanism, which enables applications to receive events notifications from gateways, also supports information searching based on defined criteria.

Similarly, OneM2M supports the Hypermedia as the Engine of Application State (HATEOAS) with REST to enhance service discoverability and extensibility in the future [3]. oneM2M specified the Application and Service Layer Management (ASM) function for handling software configuration, execution, troubleshooting and upgrading at Application Entities (AEs) and CSEs by utilizing the device management (DMG) functions.  

Additionally, oneM2M specified the Data Management and Repository (DMR) CSF for data storage and mediation functions, the Discovery (DIS) CSF for information searching, and the Group Management (GMG) CSF to enable the M2M System to perform bulk operations on multiple devices, applications or resources that are part of a group.

All entities in the oneM2M System, such as AEs, CSEs, data, etc. are represented as resources that can be accessible through REST APIs. oneM2M identifies three categories of resources: 
1.	Normal resources: Include the complete set of representations of data, which constitutes the base of the information to be managed. 
2.	Virtual resources: Used to trigger processing and/or retrieve results, but they do not have a permanent representation in a CSE. 
3.	Announced resources: a resource at a remote CSE that is linked to the original resource that has been announced, and it maintains some of the characteristics of the original resource. 

A unique identifier (URI) identifies a resource with a set of defined attributes, which can be of two types:
1.	Attribute: meta-data that provides properties associated with a resource representation.
2.	Sub-Resource: A resource that has a containment relationship with the addressed (parent) resource. The parent resource representation contains references to the children. The lifetime of the subresource is linked to the parent's resource lifetime.

Attributes can be:
•	RW: read/write by client
•	RO: Read-Only by client, set by the server
•	WO: Write-once, can be provided at creation,but cannot be changed anymore

The resource tree at both ETSI and oneM2M specifications have a lot of similarity, however a number of different could be listed here:
1.	oneM2M has defined a set of new resources to handle the additional capabilities and functionalities specified by the Common Service Functions (CSFs), such as LocationPolicy, StatesCollect, are Request resources.
2.	The resource’s url in oneM2M are shorter by omitting the usage of collections resource (i.e., the applications, containers and contentInstances resources).
3.	In addition to the parent-child relation between resources, oneM2M specified linking resources in a nun-hierarchical method.
4.	Additional attributes are defined to application, container and contentInstance resources, for example, the ontologyRef attribute is used to link the resource to a predefined ontology.   

References
[1]	ETSI TS 102 690 v1.1.1, “Machine-to-Machine communications (M2M); Functional architecture,” 2011.
[2]	ETSI TS 102 921 v1.1.1, “Machine-to-Machine communications (M2M); mIa, dIa and mId interfaces,” 2012.
[3]	oneM2M-TS-0001, “OneM2M Functional Architecture,” vol. 1. 2015. 
