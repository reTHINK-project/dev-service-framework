### JSON Schema
It's a declarative language defining structures and constraints. It's similar to XSD but more clear and human- and machine-readable.
Here is a basic example of a JSON Schema:
```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "warehouseLocation": {
            "description": "Coordinates of the warehouse with the product",
            "$ref": "http://json-schema.org/geo"
        }
    },
    "required": ["id", "name", "price"]
}
```

The above schema has four properties called keywords. The title and description keywords are descriptive only, in that they do not add constraints to the data being validated. The intent of the schema is stated with these two keywords (that is, this schema describes a product). And a possible example for this schema:
```
{
    "id": 1,
    "name": "A green door",
    "price": 12.50,
    "tags": ["home", "green"],
    "warehouseLocation": {
        "latitude": 54.4,
        "longitude": -32.7
    }
}
```

The **type** keyword is fundamental to JSON Schema. It specifies the data type for a schema.
At its core, JSON Schema defines the following basic types: **string, number, object, array, boolean, null**

The **$schema** keyword is used to declare that a JSON fragment is actually a piece of JSON Schema. It also declares which version of the JSON Schema standard that the schema was written against.

The **$ref** keyword is used as a type value, refering to a complex type defined by a **$schema** piece. **$ref**
can also be used in a format called JSON Pointer. e.g, let’s start with the schema that defines an address, since we are going to reuse this schema, it is customary (but not required) to put it in the parent schema under a key called definitions:
```
{
    "definitions": {
        "address": {
            "type": "object",
            "properties": {
                "street_address": { "type": "string" },
                "city":           { "type": "string" },
                "state":          { "type": "string" }
            },
            "required": ["street_address", "city", "state"]
        }
    }
}
```
and then use it like:
```{ "$ref": "#/definitions/address" }```

**$ref** can also be a relative or absolute URI, so if you prefer to include your definitions in separate files, you can also do that. For example: ```{ "$ref": "definitions.json#/address" }```

### Tools
* Docson - documentation for your JSON types.
Give [Docson](https://github.com/lbovet/docson) a JSON schema and it will generate a beautiful documentation.
