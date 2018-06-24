module.exports.buildModelTemplate = function(modelName) {
  const template =
  `const BaseEntity = require("./base-entity.js")
  
  class ${modelName.pascalCase()} extends BaseEntity {

  }`.trimAllLeft()

  return template
}
