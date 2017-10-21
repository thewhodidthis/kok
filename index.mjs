// Helps create assertions
const verify = (jack = v => v, name = jack && jack.name, expected, operator = 'is') => {
  const reassert = (...args) => {
    const marker = Math.max(jack.length - 1, 0)
    const actual = args[marker]
    const wanted = expected || (marker > 0 ? args[0] : expected)
    const result = jack(...args)

    // Cook up own exception
    if (!result) {
      const { stack } = Error(name)
      const exception = { actual, expected: wanted, operator, stack, toString: () => name }

      throw exception
    }

    return result
  }

  // Make beautiful, preserve name and arity
  Object.defineProperties(reassert, {
    name: {
      value: name,
      // ES2015 upwards
      configurable: true
    },
    length: {
      value: jack.length,
      configurable: true
    }
  })

  return reassert
}

// Ready made assertions that cover most of my needs
const eq = (a, b) => Object.is(a, b)
const notEq = (a, b) => !eq(a, b)

const ok = a => !!a
const notOk = a => !a

const assert = verify()

assert.ok = verify(ok, 'truthy', true, '!!')
assert.notOk = verify(notOk, 'falsy', false, '!')

assert.equal = verify(eq, 'same')
assert.notEqual = verify(notEq, 'different')

export { verify, assert }
