'use strict'

const { ok } = require('tapeless')
const { assert } = require('./')

const { equal, notEqual } = assert

const t1 = equal(2, 2)
const t2 = notEqual(2, 3)

ok
  .describe(equal.name)
  .test(t1)
  .describe(notEqual.name, 'will compute')
  .test(t2)
  .exit()
