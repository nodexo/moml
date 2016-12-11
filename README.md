
MOML
====

Minimalist Object Markup Language.

[![Build Status](https://travis-ci.org/nodexo/moml.svg?branch=master)](https://travis-ci.org/nodexo/moml)
[![Test Coverage](https://codeclimate.com/github/nodexo/moml/badges/coverage.svg?v=1.0.0)](https://codeclimate.com/github/nodexo/moml)
[![Code Climate](https://codeclimate.com/github/nodexo/moml/badges/gpa.svg?v=1.0.0)](https://codeclimate.com/github/nodexo/moml)

[![Dependency Status](https://david-dm.org/nodexo/moml.svg?v=1.0.0)](https://david-dm.org/nodexo/moml)
[![devDependencies Status](https://david-dm.org/nodexo/moml/dev-status.svg?v=1.0.0)](https://david-dm.org/nodexo/moml?type=dev)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


Installation
------------

    $ npm install moml


**Please also read the short [MOML Spec](https://github.com/nodexo/moml/blob/master/spec.md)!**


Usage
------

```javascript
const moml = require('moml')

let data = `
Title:      My First Day with MOML
Author:     Sam Text
Date:       12/06/2016

Tags[]:     explosive, story

Remarks:    This is a multiline remark.
            Use the same indentation _
            on subsequent lines. 
`

let result = moml.parse(data)
console.log(JSON.stringify(result, null, 4))

/* 
{
    "title": "My First Day with MOML",
    "author": "Sam Text",
    "date": "12/06/2016",
    "tags": [
        "explosive", 
        "story"
    ],
    "remarks": "This is a multiline remark.\nUse the same indentation on subsequent lines."
}
*/
```


License
-------
ISC
