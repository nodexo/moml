
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
    try {
      s = s.replace(/^([^:\s]+:)([ \t]+)(.*\n)([ \t]+)([^\s]+)/gm,
        function (match, $1, $2, $3, $4, $5, offset, original) {
          return $1 + ' |\n' + $4 + $3 + $4 + $5
        })
    } catch (e) {
      console.log(e.message)
    }

    // Parse YAML
    let data
    try {
      data = yaml.safeLoad(s)
    } catch (e) {
      console.log(e.message)
    }

    // Transform data
    let result = {}
    try {
      for (let k of Object.keys(data)) {
        let key = k.toLowerCase()
        let value = data[k]
        if (value) {
          value = value
            .replace(/\n+$/, '')
            .replace(/_[ \r\t]*\n/g, '')

          let isArray = false
          if (key.match(/\*$/)) {
            key = key.substring(0, key.length - 1)
            isArray = true
          } else if (key.match(/\[\]$/)) {
            key = key.substring(0, key.length - 2)
            isArray = true
          }

          if (isArray) {
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
    } catch (e) {
      console.log(e.message)
    }

    return result
  }

}

module.exports = MOML
