const routes = require("./routes.js")

module.exports = (req, res) => {
  // temp hack for favicon
  if (req.url.includes("favicon")) {
    return res.end()
  }

  const path = req.url.split("/").removeNulls()
  const controller = path.secondLast()
  const action = path.last() === controller ? "index" : path.last()

  const klass = controller.capitalize() + "Controller"

  const kontrollerInstance = new routes[klass]
  kontrollerInstance[action](req,res)
}

