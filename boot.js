const http = require("http")
const router = require("./router.js")

require("./extensions/String.js")
require("./extensions/Array.js")

function boot(routes) {
  return http.createServer((req, res) => {
    router(req, res, routes)
  })
}

if (!module.parent) {
  const routes = require("./routes")
  boot(routes).listen(8000)
}

module.exports = boot
