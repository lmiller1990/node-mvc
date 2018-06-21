const http = require("http")
const app = require("../boot.js")
const PORT = 9000

describe("app", () => {
  describe("GET /users", () => {
    let server
    beforeEach(() => server = app.listen(PORT))
    afterEach(()  => server.close())

    it("returns correctly", (done) => {
      http.get(`http://localhost:${PORT}/users`, (res) => {
        expect(res.statusCode).toBe(200)
        done()
      })
    })
  })
})
