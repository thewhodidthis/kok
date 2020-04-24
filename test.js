'use strict'

const { equal, ok } = require('assert')
const { assert } = require('./')

const equalMaybe = assert.equal(2, 2)

equal(assert.equal.name, 'same')
ok(equalMaybe)

const differentHopefully = assert.notEqual(2, 3)

equal(assert.notEqual.name, 'different')
ok(differentHopefully)
