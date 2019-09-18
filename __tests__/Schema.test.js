const Schema = require('../lib/Schema');

describe('Schema', () => {

  const exampleSchema = {
    firstName: {
      Type: 'string',
      required: true
    },
    lastName: {
      Type: 'string',
      required: true
    },
    married: {
      Type: 'boolen',
      required: true
    },
    kids: {
      Type: 'number',
      required: true
    }
  };
  const schema = new Schema(exampleSchema);
  
  it('validates a correct model', () => {
    const person = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: 3
    };
    expect(schema.validate(person)).toEqual(schema);
  });

  it('throws on invalid model', () => {

  });

  // more test cases...
});