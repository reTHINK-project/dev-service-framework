
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiJsonSchema from 'chai-json-schema';

let expect = chai.expect;
let assert = chai.assert;
chai.use(chaiAsPromised);
chai.use(chaiJsonSchema);
/*
//Testing the Message factory the chai
let goodApple = {
    skin: "thin",
    colors: ["red", "green", "yellow"],
    taste: 10
};
let badApple = {
    colors: ["brown"],
    taste: 0,
    worms: 2
};
let fruitSchema = {
    "title": "fresh fruit schema v1",
    "type": "object",
    "required": ["skin", "colors", "taste"],
    "properties": {
        "colors": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        },
        "skin": {
            "type": "string"
        },
        "taste": {
            "type": "number",
            "minimum": 5
        }
    }
};

//bdd style
expect(goodApple).to.be.jsonSchema(fruitSchema);
expect(badApple).to.not.be.jsonSchema(fruitSchema);

goodApple.should.be.jsonSchema(fruitSchema);
badApple.should.not.be.jsonSchema(fruitSchema);

expect(goodApple).equal(true);

//tdd style
assert.jsonSchema(goodApple, fruitSchema);
assert.notJsonSchema(badApple, fruitSchema);
*/