const exec = require("child_process").exec
const fs = require("fs")
const config = require("../db/config.js")
const { buildModelTemplate } = require("../templates/generators.js")
require("../extensions/String.js")

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

  const template = buildModelTemplate(modelName)
  fs.writeFileSync(`./models/${modelName.kebabCase()}.js`, template)

  console.log(`Created model models/${modelName.kebabCase()}.js.`)
  console.log(`Created migration db/migrations/${migrationName}.sql.`)
} catch (e) {
  console.log("Error generating migration: ", e)
}
