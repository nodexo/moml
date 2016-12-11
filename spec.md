
MOML Spec
=========

MOML is kind of *"YAML in disguise"*. 

It uses the [js-yaml YAML 1.2 parser and serializer](https://www.npmjs.com/package/js-yaml) under the hood to parse the input data.   
MOML itself only adds a couple of neat transformations - so the **markup** can be **visually appealing**.

The MOML parser produces JSON output.


### Key/Value 

Keys are case-insensitve and always lower case in the resulting JSON: author, Author and AUTHOR all end as **author**.  
For values apply the same rules as in [YAML](http://www.yaml.org/spec/1.2/spec.html).

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

### Full example 

Use it e.g. in combination with [markdown-data](https://www.npmjs.com/package/markdown-data)


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
