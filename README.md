## TODO: Name

The Node.js MVC framework you never had but always deserved.

## Features

Rails-like syntax
Test environment out of the box
Some other stuff
Lots of extra methods for `String`, `Array` etc.


## Interesting Examples

```js
const BaseEntity = require("./models/base-entity.js")

class Animal extends BaseEntity {}

const animal = await Animal.create({ name: "Doggo" })

console.log(animal) //=> { id: 1, name: "Doggo" }
```
