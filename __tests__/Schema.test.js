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
      Type: 'boolean',
      required: true
    },
    kids: {
      Type: 'number',
      required: true
    }
  };
  const schema = new Schema(exampleSchema);

  const personModel = {
    firstName: 'Chris',
    lastName: 'Sample',
    married: true,
    kids: 3
  };
  
  it('validates a correct model', () => {
    expect(schema.validate(personModel)).toEqual(personModel);
  });

  it('Boolean caster', () => {
    const castPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: 'true',
      kids: 3
    };
    expect(schema.validate(castPerson)).toEqual(personModel);
  });

  it('Number caster', () => {
    const castPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: 'true',
      kids: '3'
    };
    expect(schema.validate(castPerson)).toEqual(personModel);
  });

  it('throws on invalid model', () => {
    const badPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: true
    };
    const badPerson2 = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: '1gh4'
    };
    expect(schema.validate(badPerson)).not.toEqual(personModel);
    expect(schema.validate(badPerson2)).not.toEqual(personModel);
  });

});