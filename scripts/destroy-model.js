const exec = require("child_process").exec
const fs = require("fs")
const config = require("../db/config.js")
require("../extensions/String.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

const query = `DROP TABLE IF EXISTS ${modelName}`

const timestamp = new Date().getTime()

try {
  const migrationName = `${timestamp}_destroy_${modelName}`
  fs.writeFileSync(`./db/migrations/${migrationName}.sql`, query.trim())
  fs.unlinkSync(`./models/${modelName.kebabCase()}.js`)

  console.log(`Created migration "db/migrations/${migrationName}.`)
  console.log(`Deleted "models/${modelName.kebabCase()}.js.`)
} catch (e) {
  console.log("Error generating migration: ", e)
}
