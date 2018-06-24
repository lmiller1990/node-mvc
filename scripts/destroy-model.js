const exec = require("child_process").exec
const fs = require("fs")
const config = require("../db/config.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

const query = `DROP TABLE IF EXISTS ${modelName}`

const timestamp = new Date().getTime()

try {
  const migrationName = `${timestamp}_destroy_${modelName}`
  fs.writeFileSync(`./db/migrations/${migrationName}.sql`, query.trim())
  console.log(`Created migration "db/migrations/${migrationName}.`)
} catch (e) {
  console.log("Error generating migration: ", e)
}
