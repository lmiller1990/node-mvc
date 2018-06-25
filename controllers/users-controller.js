const BaseController = require("./base-controller.js")

class UsersController extends BaseController {
  constructor() {
    super()
  }

  index(req, res) {
    res.writeHead(200)
    res.end("users#index")
  }

  new(req, res) {
    res.end("users#new")
  }

  create(req, res) {
    res.end("users#create")
  }
}

module.exports = UsersController
