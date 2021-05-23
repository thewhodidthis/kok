import { assert } from './main.js'

const { equal, notEqual } = assert

// Clean run hopefully
console.assert(equal(2, 2), 'equal')
console.assert(notEqual(2, 3), 'not equal')
