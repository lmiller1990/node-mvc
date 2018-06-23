const exec = require("child_process").exec
const config = require("../db/config.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

exec(`psql -d test_db -c "CREATE TABLE IF NOT EXISTS ${modelName}();"`, 
  (err, stdout, stderr) => {
    if (err) console.log(err)

    if (stderr && stderr.includes("already exists")) {
      console.log(`${modelName} already exists. Skipping.`)
    } else if (stdout && stdout.includes("CREATE TABLE")) {
      console.log(`Created ${modelName}.`)
    }
  })
