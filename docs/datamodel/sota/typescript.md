## Typescript
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
With TypeScript, you can use existing JavaScript code, incorporate popular JavaScript libraries, and be called from other JavaScript code.

**Advantages:**

1. We can use declarative file types *.d.ts for interface definitions (data models and API).
2. Tool support. Since there are variable types, tools are more robust for error detection in compile time. Refactoring is less problematic, and consequently scaling the size of the project.
3. Compatible will all available JavaScript libraries.
4. Compliant with available modular systems e.g AMD, CommonJS

### Using Typescript for data models
One of the great features of TypeScript is that interface implementation is implicit. In Java or ActionScript, you have to specifically say that a type "implements MyInterface". In TypeScript, if it fits, it fits.
We can use TypeScript to describe data models (Data Transfer Object's). ex:
```javascript
declare enum Direction {IN, OUT, INOUT}

interface DTO {
    name: string;
    direction: Direction;
    size: number;
    active: boolean;
    object: {address: string};
    
    from?: string; //optional field
    to: string;
}
```
and use it like:
```javascript
var dt: DTO = {
    name: 'Micael', 
    direction: Direction.IN,
    size: 20,
    active: true,
    object: {address: "Aveiro", name: 'xpto'/*extra fields are valid*/},
    //from
    to: 'Pedro',
    other: 'xpto' //extra fields are valid
};
```
This object is equivalent to a JavaScript JSON object. It can be used in the TypeScript API or for message data transfer. Types and mandatory fields are enforced by the compiler.



#### TypeScript to JSON Schema
It should be possible in the future to build some tools to convert *.d.ts (declarative files) to JSON Schema using some sort of reflection API. There is something similar in progress on the TypeScript API project. 

#### Runtime Schema Compare
Comparison of data objects in runtime (directly in TypeScript) is an issue. We need some parser tools that are not available right now. There is no way to enforce this at run-time. JSON Schema might be a better choice if that's what we need, and we can use [automatic tools](https://github.com/lbovet/typson) to translate between.

Converted example with Typson
```javascript
{
    "DTO": {
        "id": "DTO",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "direction": {
                "id": "Direction",
                "enum": [
                    "IN",
                    "OUT",
                    "INOUT"
                ]
            },
            "size": {
                "type": "number"
            },
            "active": {
                "type": "boolean"
            },
            "object": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "address": {
                        "type": "string"
                    }
                },
                "required": [
                    "address"
                ]
            },
            "from": {
                "description": "optional field",
                "type": "string"
            },
            "to": {
                "type": "string"
            }
        },
        "required": [
            "name",
            "direction",
            "size",
            "active",
            "object",
            "to"
        ],
        "additionalProperties": false
    }
}
```


#### Schema Extensions
Extensions to data model definition (ex: field validators) could be added by **decorators**. It's something similar to Annotations in Java. And we can build some runtime validations like "Bean Validation". 
