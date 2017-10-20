'use strict'

const { ok } = require('tapeless')
const { equal, notEqual } = require('./')

const t1 = equal(2, 2)
const t2 = notEqual(2, 3)

ok(t1, 'equal', 'will compute')
ok(t2, 'not equal')
