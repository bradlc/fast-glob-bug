const fg = require('fast-glob')
const assert = require('assert')

let pattern1 = '**/*.js'
let pattern2 = '../test2/**/*.js'

// fails
assert.deepStrictEqual(
  fg.sync([pattern1, pattern2]).sort(),
  [...fg.sync(pattern1), ...fg.sync(pattern2)].sort()
)
