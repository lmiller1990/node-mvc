const exec = require("child_process").exec

module.exports.dropIfExists = function(table, done) {
  exec(`psql -d test_db -c "DROP TABLE IF EXISTS ${table}"`, (err, stdout, stderr) => {
    if (err) console.log(err)
    if (stderr) {}
    done()
  })
}

module.exports.createIfDoesntExist = function(table, done) {
  exec(`psql -d test_db -c "CREATE TABLE IF NOT EXISTS ${table}()"`, (err, stdout, stderr) => {
    if (err) {}
    if (stderr) {}
    done()
  })
}

