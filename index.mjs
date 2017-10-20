// Helps create assertions
const assert = (jack = (() => {}), name = jack.name, operator = name) => {
  const reassert = (...args) => {
    const marker = Math.max(jack.length - 1, 0)
    const wanted = args[marker]
    const actual = [...args].shift()

    // In case of simply evaluating "truthiness"
    const result = typeof jack === 'function' ? jack(...args) : !!jack

    // Cook up own exception
    if (!result) {
      const { stack } = Error(name)
      const exception = { operator, expected: wanted, actual, stack, toString: () => name }

      throw exception
    }

    return result
  }

  // Make beautiful and preserve these
  Object.defineProperties(reassert, {
    name: {
      value: name,
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
/* eslint no-unused-vars: 1 */
const eq = (a, b, msg) => Object.is(a, b)
const notEq = (a, b, msg) => !eq(a, b)

assert.equal = assert(eq, 'same')
assert.notEqual = assert(notEq, 'different')

const ok = (x, msg) => assert(x)
const notOk = (x, msg) => !ok(x)

assert.ok = assert(ok, 'truthy')
assert.notOk = assert(notOk, 'falsy')

export default assert
