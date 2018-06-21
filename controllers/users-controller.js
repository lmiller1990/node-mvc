class UsersController {
  constructor() {
  }

  index(req, res) {
    res.writeHead(200)
    res.end("Hello! from users#index")
  }
}

module.exports = UsersController
