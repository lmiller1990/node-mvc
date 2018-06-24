const exec = require("child_process").exec
const util = require("util")
const fs = require("fs")
const readdir = util.promisify(fs.readdir)
const unlink = util.promisify(fs.unlink)

module.exports.deleteAllModels = async function() {
  try {
    const directory = "models"
    let files = await readdir(directory)
    files = files.filter(x => !x.includes("base-entity.js"))
    const unlinkPromises = files.map(filename => unlink(`${directory}/${filename}`));
    return Promise.all(unlinkPromises)
  } catch (e) {
    console.log(e)
  }
}
