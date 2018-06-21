const http = require("http")
const boot = require("../boot.js")
const PORT = 9000

class UsersController {
  index(req, res) {
    res.end("users#index")
  }

  new(req, res) {
    res.end("users#new")
  }
}

const routes = { UsersController }

describe("router", () => {
  let server
  beforeEach(() => server = boot(routes).listen(PORT))
  afterEach(()  => server.close())

  describe("GET /users/new", () => {
    it("returns body and 200 status code", (done) => {
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
    it("returns body and 200 status code", (done) => {
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
