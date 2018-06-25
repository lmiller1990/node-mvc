class UsersController {
  // GET /users
  index(req, res) {
    res.end("users#index")
  }

  // GET /users/new
  new(req, res) {
    res.end("users#new")
  }

  // POST /users
  create(req, res) {
    res.writeHead(203)
    res.end("users#create")
  }

  // PUT /users/:id
  update(req, res) {
    res.writeHead(200)
    res.end("users#update")
  }

  // GET /users/:id/edit
  edit(req, res) {
    res.writeHead(200)
    res.end("users#edit")
  }

  // GET /users/1
  show(req, res) {
    res.writeHead(200)
    res.end("users#show")
  }
}

module.exports = UsersController
