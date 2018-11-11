'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Helps create assertions?
const reassert = (assert = v => v, expected, operator = 'is') => {
  const test = (...assertion) => {
    const result = assert(...assertion);

    if (!result) {
      // Cook up own exception
      throw Object.assign(Error(name), { actual: assertion.shift(), expected, operator })
    }

    return result
  };

  // Preserve name
  Object.defineProperty(test, 'name', {
    value: assert && assert.name,
    configurable: true
  });

  return test
};

const assert = reassert();

const truthy = a => !!a;
const falsy = a => !a;

assert.ok = reassert(truthy, true, '!!');
assert.notOk = reassert(falsy, false, '!');

const same = (a, b) => Object.is(a, b);
const different = (a, b) => !same(a, b);

assert.equal = reassert(same);
assert.notEqual = reassert(different);

exports.assert = assert;
exports.reassert = reassert;
