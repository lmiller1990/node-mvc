module.exports = (req, res, routes) => {
  const path = req.url.split("/").removeNulls()
  const controller = path.secondLast()
  const action = path.last() === controller
    ? req.method === "GET" ? "index" : "create"
    : path.last()

  const klass = controller.capitalize() + "Controller"

  try {
    const kontrollerInstance = new routes[klass]
    kontrollerInstance[action](req, res)
  } catch (err) {
    res.writeHead(404)
    res.end("404 - Page not found")
  }
}
