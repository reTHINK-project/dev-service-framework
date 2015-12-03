# Address factory
The address factory module is a derivative work of https://github.com/jsdom/whatwg-url, following the guidelines specified in https://url.spec.whatwg.org/

## Usage

	url = new URL("hyperty-runtime-esn://domain.com/12345?a=1&b=2&c=3", "");
	console.log(url.protocol) //"hyperty-runtime-esn:",
	console.log(url.origin) // "hyperty-runtime-esn://domain.com",
	console.log(url.hostname) // "domain.com",
	console.log(url.host) //"domain.com",
	console.log(url.port) // "",
	console.log(url.path) // undefined,
	console.log(url.search) // "?a=1&b=2&c=3", 
	console.log(url.hash) //"", 
	console.log(url.href) // "hyperty-runtime-esn://domain.com/12345?a=1&b=2&c=3"

## Tests

To check how it works, see test/reThinkTests.js. There are several URL examples including the new schemas proposed by reThink, not included in the original specification. Run with:

        cd tests
        mocha reThinkTests

NOTE: it is still pending to add a method to validate the URL