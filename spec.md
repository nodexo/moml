
MOML Spec
=========

MOML is kind of *YAML in disguise*. 

It uses the outstanding and mature [js-yaml YAML 1.2 parser and serializer](https://www.npmjs.com/package/js-yaml) under the hood.  
MOML only adds a couple of neat transformations, so the markup itself can be **more visually appealing**.

The MOML parser produces JSON output.


### Keys 

Keys are case-insensitve and always lower case in the parsed result: author, Author and AUTHOR all result in **author**.  
So pick your own visual style!

Example:
```
Author: Sam Text
```

Result:
```
{
    "author": "Sam Text"
}
```

### Arrays

Just suffix the respective key with square brackets. That's all.

Example:
```
Tags[]: explosive, story
```

Result:
```
{
    "tags": [
        "explosive", 
        "story"
    ]
}

```

### Multiline

Simply continue writing on the next line with the same level of indentation.  
To prevent a **newline (\n)** supply a trailing underscore.


Example:
```
Remarks:    This is a multiline remark.
            You only have to use the same indentation _
            on subsequent lines. 
            This improves readybility a lot!
```

Result:
```
{
    "remarks": "This is a multiline remark.\nYou only have to use the same indentation on subsequent lines.\nThis improves readybility a lot!"
}
```

### Multiline to Array conversion

Quite self explanatory :)


Example:
```
Remarks[]:  This is a multiline remark.
            Use the same indentation _
            on subsequent lines.
            This improves readybility a lot!
```

Result:
```
{
    "remarks": [
        "This is a multiline remark.",
        "Use the same indentation on subsequent lines.",
        "This improves readybility a lot!"
    ]
}

```

### Full example for usage in e.g. *markdown (meta)data*

Data:
```
Title:      My First Day with MOML

Author:     Sam Text

Date:       12/06/2016

Tags[]:     explosive, story

Remarks:    This is a multiline remark.
            Use the same indentation _
            on subsequent lines. 
```

Result:
```
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
