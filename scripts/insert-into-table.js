const exec = require("child_process").exec
require("../extensions/Array.js")

const env = process.env.NODE_ENV || "development"

function format(values) {
  return values.map(x => {
    if (typeof x === "string") {
      return `'${x}'`
    }
    return x
  })
}

function insertInto(table, keysAndValues) {
  const keys = Object.keys(keysAndValues)
  const values = Object.values(keysAndValues)

  const formattedValues = format(values)

  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO ${table} 
      (
        ${keys.joinExceptLast(", ")}
      )
      VALUES
      (
        ${formattedValues.joinExceptLast(", ")}
      );
    `

    const getIdQuery = `SELECT id FROM ${table}`

    exec(`psql -d test_db -c "${query}"`,
      (err, stdout, stderr) => {
        if (err) reject(err)
        if (stderr) console.log(stderr)

        if (env !== "test") console.log(`Inserted ${values} into ${table}.`)
        exec(`psql -d test_db -c "${getIdQuery}"`,
          (err, stdout, stderr) => {
            const id = parseInt(stdout.split("\n").removeNulls()[2])
            resolve({ id })
          })
      })
  })
}

module.exports = insertInto
