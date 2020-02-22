'use strict'

const { equal, ok } = require('assert')
const { assert } = require('./')

const t1 = assert.equal(2, 2)

equal(assert.equal.name, 'same')
ok(t1)

const t2 = assert.notEqual(2, 3)

equal(assert.notEqual.name, 'different')
ok(t2)
