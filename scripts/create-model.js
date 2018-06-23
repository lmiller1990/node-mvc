const exec = require("child_process").exec
const config = require("../db/config.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

const query = `
  CREATE TABLE IF NOT EXISTS ${modelName}(
    id SERIAL
  );
`

exec(`psql -d test_db -c "${query}"`,
  (err, stdout, stderr) => {
    if (err) console.log(err)

    if (stderr && stderr.includes("already exists")) {
      console.log(`${modelName} already exists. Skipping.`)
    } else if (stdout && stdout.includes("CREATE TABLE")) {
      console.log(`Created ${modelName}.`)
    }
  })
