const exec = require("child_process").exec
const util = require("util")
const fs = require("fs")
const readdir = util.promisify(fs.readdir)
const unlink = util.promisify(fs.unlink)

module.exports.deleteAllMigrations = async function() {
  try {
    const directory = "db/migrations"
    const files = await readdir(directory)
    const unlinkPromises = files.map(filename => unlink(`${directory}/${filename}`));
    return Promise.all(unlinkPromises)
  } catch (e) {
    console.log(e)
  }
}

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

