const exec = require("child_process").exec

module.exports.dropIfExists = function(table) {
  return new Promise((resolve, reject) => {
    exec(`psql -d test_db -c "DROP TABLE IF EXISTS ${table}"`, (err, stdout, stderr) => {
      if (err) reject(err)
      if (stderr) {}
      resolve(stdout)
    })
  })
}

module.exports.createIfDoesntExist = function(table) {
  return new Promise((resolve, reject) => {
    exec(`psql -d test_db -c "CREATE TABLE IF NOT EXISTS ${table}(id SERIAL, name varchar(255))"`, (err, stdout, stderr) => {
      if (err) reject(err)
      if (stderr) {}
      resolve(stdout)
    })
  })
}

