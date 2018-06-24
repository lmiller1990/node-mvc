const fs = require("fs")
const exec = require("child_process").exec

const files = fs.readdirSync("db/migrations")

for (let f in files) {
  const query = fs.readFileSync(`db/migrations/${files[f]}`)
  exec(`psql -d test_db -c "${query}"`, (err, stdout, stderr) => {
    if (err) console.log(err)
    console.log(`Executed migration ${files[f]}.`)
  })
}
