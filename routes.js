const fs = require("fs")
const BaseController = require("./controllers/base-controller.js")
const ApplicationController = require("./controllers/application-controller.js")

const files = fs.readdirSync("controllers")
const controllers = {}

for (const file of files) {
  const className = file.split(".")[0].pascalCase()
  controllers[className] = require(`${process.cwd()}/controllers/${file}`)
}

controllers["BaseController"] = BaseController
controllers["ApplicationController"] = ApplicationController

module.exports = controllers
