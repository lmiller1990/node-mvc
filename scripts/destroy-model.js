const exec = require("child_process").exec
const config = require("../db/config.js")

const env = process.env.NODE_ENV || "development"
const modelName = process.argv[1]

exec(`psql -d test_db -c "DROP TABLE IF EXISTS ${modelName};"`, 
  (err, stdout, stderr) => {
    if (err) console.log(err)

    if (stderr && stderr.includes("does not exist")) {
      console.log(`${modelName} does not exist. Skipping.`)
    } else if (stdout && stdout.includes("DROP TABLE")) {
      console.log(`Dropped ${modelName}.`)
    }
  })

