const http = require("http")
const boot = require("../boot.js")
const PORT = 9000

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

const routes = { UsersController }

describe("router", () => {
  let server
  beforeEach(() => server = boot(routes).listen(PORT))
  afterEach(()  => server.close())

  describe("GET /users/new", () => {
    it("calls users#new returns body and 200 status code", (done) => {
      http.get(`http://localhost:${PORT}/users/new`, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(chunk).toBe("users#new")
          expect(res.statusCode).toBe(200)
          done()
        })
      })
    })
  })

  describe("GET /users", () => {
    it("calls users#index returns body and 200 status code", (done) => {
      http.get(`http://localhost:${PORT}/users`, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(chunk).toBe("users#index")
          expect(res.statusCode).toBe(200)
          done()
        })
      })
    })
  })

  describe("POST /users", () => {
    it("calls users#create returns body and 203 status code", (done) => {
      const options = {
        hostname: 'localhost',
        port: PORT,
        path: '/users',
        method: 'POST',
      }
      const req = http.request(options, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(res.statusCode).toBe(203)
          expect(chunk).toBe("users#create")
          done()
        })
      })

      req.end()
    })
  })

  describe("GET /users/1", () => {
    it("calls users#show returns body and 200 status code", (done) => {
      const options = {
        hostname: 'localhost',
        port: PORT,
        path: '/users/1',
        method: 'GET',
      }
      const req = http.request(options, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(res.statusCode).toBe(200)
          expect(chunk).toBe("users#show")
          done()
        })
      })

      req.end()
    })
  })

  describe("GET /users/:id/edit", () => {
    it("calls users#edit returns body and 200 status code", (done) => {
      const options = {
        hostname: 'localhost',
        port: PORT,
        path: '/users/1/edit',
        method: 'GET',
      }
      const req = http.request(options, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(res.statusCode).toBe(200)
          expect(chunk).toBe("users#edit")
          done()
        })
      })

      req.end()
    })
  })

  describe("PUT /users/:id", () => {
    it("calls users#update returns body and 200 status code", (done) => {
      const options = {
        hostname: 'localhost',
        port: PORT,
        path: '/users/1',
        method: 'PUT',
      }
      const req = http.request(options, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(res.statusCode).toBe(200)
          expect(chunk).toBe("users#update")
          done()
        })
      })

      req.end()
    })
  })

  describe("404", () => {
    it("returns a 404 status code", (done) => {
      http.get(`http://localhost:${PORT}/undefined`, (res) => {
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          expect(chunk).toBe("404 - Page not found")
          expect(res.statusCode).toBe(404)
          done()
        })
      })
    })
  })
})
