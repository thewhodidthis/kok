import { assert } from "./main.js"

// Clean run hopefully
console.assert(assert.equal(2, 2), "equal")
console.assert(assert.notEqual(2, 3), "not equal")
