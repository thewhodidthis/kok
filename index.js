'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Helps create assertions
const reassert = (jack = v => v, name = jack && jack.name, expected, operator = 'is') => {
  const verify = (...args) => {
    const marker = Math.max(jack.length - 1, 0);
    const actual = args[marker];
    const wanted = expected || (marker > 0 ? args[0] : expected);
    const result = jack(...args);

    // Cook up own exception
    if (!result) {
      const { message, stack } = Error(name);
      const exception = { actual, message, expected: wanted, operator, stack, toString: () => name };

      throw exception
    }

    return result
  };

  // Preserve name and arity
  Object.defineProperties(verify, {
    name: {
      value: name,
      // ES2015 upwards
      configurable: true
    },
    length: {
      value: jack && jack.length,
      configurable: true
    }
  });

  return verify
};

const assert = reassert();

const ok = a => !!a;
const notOk = a => !a;

assert.ok = reassert(ok, 'truthy', true, '!!');
assert.notOk = reassert(notOk, 'falsy', false, '!');

const eq = (a, b) => Object.is(a, b);
const notEq = (a, b) => !eq(a, b);

assert.equal = reassert(eq, 'same');
assert.notEqual = reassert(notEq, 'different');

exports.assert = assert;
exports.reassert = reassert;
