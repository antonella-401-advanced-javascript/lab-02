
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`We expected ${expectedType}, but we got ${providedValue}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(error) {
    super('Error:', error);
  }
}

module.exports = {
  CastError,
  ModelError
};