
'use strict'
const tap = require('tap')
const MOML = require('../index.js')

let expectedResult

/**
 * Malformed input data
 */
tap.throws(function () {
  MOML.parse('Impossible to parse...')
}, {}, 'Malformed input data')

/**
 * Wrong input types
 */
expectedResult = null
tap.strictSame(MOML.parse(1), expectedResult, 'Wrong input type - Number')
tap.strictSame(MOML.parse({}), expectedResult, 'Wrong input type - Object')

/**
 * Keys
 */
expectedResult = {
  author: 'Sam Text'
}
tap.strictSame(MOML.parse('author: Sam Text'), expectedResult, 'Key - general')
tap.strictSame(MOML.parse('Author: Sam Text'), expectedResult, 'Keys - case insensitivity (1)')
tap.strictSame(MOML.parse('AUTHOR: Sam Text'), expectedResult, 'Keys - case insensitivity (2)')

/**
 * Arrays
 */
expectedResult = {
  tags: [
    'explosive',
    'story'
  ]
}
tap.strictSame(MOML.parse('Tags[]: explosive, story'), expectedResult, 'Array')
tap.strictSame(MOML.parse(`
Tags[]: explosive
        story
`), expectedResult, 'Array')

/**
 * Multi-line
 */
expectedResult = {
  remarks: 'This is a multiline remark. Use the same indentation on subsequent lines. This improves readybility a lot!'
}
tap.strictSame(MOML.parse(`
Remarks:    This is a multiline remark. _
            Use the same indentation _
            on subsequent lines. _
            This improves readybility a lot!
`), expectedResult, 'Multiline - no line breaks')

expectedResult = {
  remarks: 'This is a multiline remark.\nUse the same indentation on subsequent lines.\nThis improves readybility a lot!'
}

tap.strictSame(MOML.parse(`
Remarks:    This is a multiline remark.
            Use the same indentation _
            on subsequent lines.
            This improves readybility a lot!
`), expectedResult, 'Multiline - line breaks')
