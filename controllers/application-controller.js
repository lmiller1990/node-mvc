const BaseController = require("./base-controller.js")

class ApplicationController extends BaseController {
  constructor() {
    super()
  }

  index(req, res) {
    res.writeHead(200)
    res.end("application#index")
  }
}

module.exports = ApplicationController
