import { assert } from './index.js'

const { equal, notEqual } = assert

console.assert(equal(2, 2), 'equal')
console.assert(notEqual(2, 3), 'not equal')
