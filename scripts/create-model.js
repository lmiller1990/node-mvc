const exec = require("child_process").exec
const fs = require("fs")
const config = require("../db/config.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

const query = `
  CREATE TABLE IF NOT EXISTS ${modelName}(
    id SERIAL
  );
`

const timestamp = new Date().getTime()

try {
  const migrationName = `${timestamp}_create_${modelName}`
  fs.writeFileSync(`./db/migrations/${migrationName}.sql`, query.trim())
  console.log(`Created migration "db/migrations/${migrationName}.`)
} catch (e) {
  console.log("Error generating migration: ", e)
}
