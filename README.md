## TODO: Name

The Node.js MVC framework you never had but always deserved.

## Desirable Features

- Rails-like syntax
- Test environment out of the box
- Database migrations
- Active Record implementation
- Generators
- Lots of convinient methods for `String`, `Array` etc.


### Installation

```bash
yarn global add @lmiller1990/node-mvc
```

### Directory

There is no command to create a project yet. You should set up your directory like this:

```
- models
- db
  - migrations
- controllers
```

## Examples 

The following snippets are of features that are already implemented in master.

### Create a model + migration

```bash
yarn create:model animal
```

Generates:

#### `models/animal.js`

```js
const BaseEntity = require("./base-entity.js")

class Animal extends BaseEntity {

}
```

#### `db/migrations/1529899606541_create_animal.sql

Generates: 

```sql
29899606541_create_animal.sql
CREATE TABLE IF NOT EXISTS animal(
    id SERIAL
  );
```

Which can then be execute by running `yarn migrate`. You can remove the model and table with `yarn model:destroy animal`.

So far this is only supported wit postgres.

### Creating an object and persisting to database

Once you created your model, you can interact with it like this (for example, in a controller):

```js
const BaseEntity = require("./models/base-entity.js")

class Animal extends BaseEntity {}

const animal = await Animal.create({ name: "Doggo" })

console.log(animal) //=> { id: 1, name: "Doggo" }
```

### Controllers

There is a simple router that works like this:

```js
// controllers/users-controller.rb
const BaseController = require("./base-controller.js")

class UsersController extends BaseController {
  index() {
    res.writeHead(200)
    res.end("users#index")
  }
}
```

This is now accessible via `/users`:

```bash
curl localhost:8000/users
users#index
```

