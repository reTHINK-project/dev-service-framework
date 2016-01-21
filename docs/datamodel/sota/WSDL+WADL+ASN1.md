WSDL which is the acronym of Web Services Description Language, allows
XML-based descriptions of web services. There are two versions V1.1 
[1] and V2.0 [2] of which only the second is approved by W3C. 

WSDL provides all the capabilities necessary to describe the various 
parts of a web service mainly the data manipulated and transmitted by 
the web service together with the involved operations defining its 
interface. 

Operations are characterized by interaction patterns defining the 
structure of the associated input/output messages together with their 
respective cardinality. 

Data types are specified with XML schema [3] which allows structured 
types builded with primitive ones [4] and derived ones [5]. 

A web service is structured as an abstract part which may be binded 
to various concrete representations. WSDL also provides the capabilities 
to define those bindings linking by the way a specific protocol with a 
concrete data format to the abstract representation of the web service. 
The main application of WSDL concerns the description web services 
operating through the SOAP model [6].
A detailed example of a web service description is given at the following 
link [7].

WADL is the acronym of Web Application Description Language [8].
Its development initiated by Sun Microsystems, should ideally meet the 
needs of the web companies (Google, Yahoo, Amazon, …)  providing many 
free and popular HTTP-based web services. One of the ultimate ambitions 
of these companies would be that these services may natively interact 
with each other without human intervention. A major obstacle to such 
automatic interoperability comes from their description, most of which 
is rather human-readable. 

In this respect WADL is an XML-based formalism targeting RESTful HTTP-based 
web services for which it aims to provide descriptions allowing a completely 
automated processing. Such a description focuses on the resources deployed 
by the service together with their structure, the format of their representation, 
and the methods that can be applied to them. The best way to quickly capture 
the spirit of this formalism, is to consult the examples of WADL schemas 
associated to REST services [8]. 

Even if WADL seems more appropriate than WSDL to concisely describe RESTful 
HTTP-based web services, there are still discussions about the pro and cons 
of each approach [9,10,11,12,13]. 

ASN.1 is the acronym of Abstract Syntax Notation number One. It is the formalism 
promotted by ITU-T [14], and used by traditional telecom players to describe 
information exchanged in ITU-T standardized protocols. ASN.1 involves basic 
data types (boolean, integer, string,  real, …) and structured ones builded 
thanks to constructors (sequence, set, choice, …) [15]. It allows high-level 
operations like subtyping to restrict the domain of a type or recursion-based 
definitions. ASN.1 provides several encoding/decoding rules [16] to introduce 
compiled ASN.1 data structures descriptions in protocols implementations. 
It is worth noting that one such a method is dedicated to XML [17].


References 

[1] http://www.w3.org/TR/wsdl

[2] http://www.w3.org/TR/wsdl20/

[3] http://www.w3.org/TR/xmlschema-2/

[4] http://www.w3.org/TR/xmlschema-2/#built-in-primitive-datatypes

[5] http://www.w3.org/TR/xmlschema-2/#built-in-derived

[6] http://www.w3.org/TR/soap/

[7] http://www.w3.org/TR/wsdl20-primer/

[8] http://www.w3.org/Submission/wadl/

[9] http://bitworking.org/news/193/Do-we-need-WADL

[10]http://rest.elkstein.org/2008/02/documenting-rest-services-wsdl-and-wadl.html

[11]http://www.soapui.org/testing-dojo/world-of-api-testing/soap-vs--rest-challenges.html

[12]http://www.ajaxonomy.com/2008/xml/web-services-part-2-wsdl-and-wadl

[13]http://stackoverflow.com/questions/1312087/what-is-the-reason-for-using-wadl

[14] http://www.itu.int/en/ITU-T/asn1/Pages/introduction.aspx

[15] Abstract Syntax Notation One (ASN.1): Specification of basic notation. ITU-T X.680 (11/2008).

[16] X.690 : ITU-T Recommendation X.690 (2002) | ISO/IEC 8825-1:2002, Information Technology - ASN.1 Encoding Rules: Specification of Basic Encoding Rules (BER), Canonical Encoding Rules (CER) and Distinguished Encoding Rules (DER)

[17] X.693 : ITU-T Recommendation X.693 (2002) | ISO/IEC 8825-4:2002, Information Technology - ASN.1 Encoding Rules: Encoding Using XML or Basic ASN.1 Value Notation



