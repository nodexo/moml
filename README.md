
MOML
====

Minimalist Object Markup Language.


Installation
------------

    $ npm install moml


Spec
-----

MOML is kind of *YAML in disguise*. 

It uses the outstanding and mature [js-yaml YAML 1.2 parser and serializer](https://www.npmjs.com/package/js-yaml) under the hood.  
MOML only adds a couple of neat transformations, so the markup itself can be **more visually appealing**.

The MOML parser produces JSON output.


### Keys 

They are case-insensitve and always lower case: author, Author and AUTHOR all result in **author**.  
Pick your own visual style.

```
Author: Sam Text

=>

{
    "author": "Sam Text"
}

```

### Arrays

Just suffix the respective keys with square brackets. That's all.

```
Tags[]: explosive, story

=>

{
    "tags": [
        "explosive", 
        "story"
    ]
}

```

### Multi-line

Simply continue on the next line with the same indentation.  
To prevent a **newline (\n)** supply a trailing underscore.

```
Remarks:    This is a multiline remark.
            You only have to use the same indentation _
            on subsequent lines. 
            This improves readybility a lot!

=>


{
    "remarks": "This is a multiline remark.\nYou only have to use the same indentation on subsequent lines.\nThis improves readybility a lot!"
}
```

### Multi-line to Array conversion

```
Remarks[]:  This is a multiline remark.
            You only have to use the same indentation _
            on subsequent lines.
            This improves readybility a lot!

=>

{
    "remarks": [
        "This is a multiline remark.",
        "You only have to use the same indentation on subsequent lines.",
        "This improves readybility a lot!"
    ]
}

```

### Full example for e.g. markdown metadata


```
Title:      My First Day with MOML

Author:     Sam Text

Date:       12/06/2016

Tags[]:     explosive, story

Remarks:    This is a multiline remark.
            Use the same indentation _
            on subsequent lines. 

=>


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
```


It's as easy as pie, isn't it?
------------------------------


License
-------
ISC
