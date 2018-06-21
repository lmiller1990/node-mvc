const BaseController = require("./base-controller.js")

class UsersController extends BaseController {
  constructor() {
    super()
  }

  index(req, res) {
    console.log("index")
    res.writeHead(200)
    res.end("users#index")
  }

  new(req, res) {
    res.writeHead(200)
    res.end("users#new")
  }
}

module.exports = UsersController
