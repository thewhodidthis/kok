'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Helps create assertions
const reassert = (jack = v => v, name, expected, operator = 'is') => {
  const ticket = name || (jack && jack.name);
  const length = jack && jack.length;

  const verify = (...args) => {
    const actual = args[0];
    const marker = Math.max(jack.length - 1, 0);
    const wanted = expected || args[marker];
    const result = jack(...args);

    // Cook up own exception
    if (!result) {
      const error = Error(ticket);

      Object.assign(error, { actual, expected: wanted, operator });

      throw error
    }

    return result
  };

  // Preserve name and arity
  Object.defineProperties(verify, {
    name: {
      value: ticket,
      // ES2015 upwards
      configurable: true
    },
    length: {
      value: length,
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
