import { equal, ok } from "assert"
import { assert } from "./main.js"

// Passing courtesy of `Object.is()`
assert.equal(null, null)
assert.notEqual(null, 0)

const equalMaybe = assert.equal(2, 2)

equal(assert.equal.name, "same")
ok(equalMaybe)

const differentHopefully = assert.notEqual(2, 3)

equal(assert.notEqual.name, "different")
ok(differentHopefully)
