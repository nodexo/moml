
'use strict'
const yaml = require('js-yaml')

/**
 * MOML static class.
 * @class
 */
class MOML {

  /**
   * Parses string
   * @param {String} s
   * @return {Object}
   */
  static parse (s) {
    if (!s || typeof s !== 'string') {
      return null
    }

    // Fix multi-lines
    s = s.replace(/^([^:\s]+:)([ \t]+)(.*\n)([ \t]+)([^\s]+)/gm,
      function (match, $1, $2, $3, $4, $5, offset, original) {
        return $1 + ' |\n' + $4 + $3 + $4 + $5
      })

    // Parse YAML
    let data
    data = yaml.safeLoad(s)

    if (Object.prototype.toString.call(data) !== '[object Object]') {
      throw new Error('Malformed input data: ' + s)
    }

    // Transform data
    let result = {}
    for (let k of Object.keys(data)) {
      let key = k.toLowerCase()
      let value = data[k]
      if (value) {
        if (typeof value === 'string') {
          value = value
            .replace(/\n+$/, '')
            .replace(/_[ \r\t]*\n/g, '')
        }

        if (key.match(/\[]$/)) {
          key = key.substring(0, key.length - 2)
          if (value.match(/\n/)) {
            value = value.split(/\n/g)
          } else {
            value = value.split(/,/g)
          }
          for (let i in value) {
            value[i] = value[i].trim()
          }
        }

        result[key] = value
      }
    }

    return result
  }

}

module.exports = MOML
