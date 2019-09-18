/* import and use validators */

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  validate(model) {
    let newModel = [];
    const entries = Object.entries(model);

    for(let i = 0; i < entries.length; i++) {
      let key = entries[i][0];
      let value = entries[i][1];
      let type = this.schema[key].Type;
      
      if(typeof value === typeof type) {
        newModel = entries[i];
      }
    }
    return newModel;
  }
}

module.exports = Schema;