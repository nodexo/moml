
MOML Spec
=========

MOML is kind of *"YAML in disguise"*. 

It uses the [js-yaml YAML 1.2 parser and serializer](https://www.npmjs.com/package/js-yaml) under the hood to parse the input data.   
**MOML** itself only adds a couple of neat transformations, so you can use **a simpler and more handsome markup**.

The MOML parser produces JSON output.


### Key/Value 

Keys are case-insensitve and always lower case in the resulting JSON: author, Author and AUTHOR all result in **"author"**.  
For values the same rules as in [YAML](http://www.yaml.org/spec/1.2/spec.html) apply.

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

Just suffix the respective key with square brackets. 
The value is split at the commas then. That's all.

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

### Multi-line

Simply continue writing on the next line at the same level of indentation.  
To prevent a **\n** *(newline)* just supply a trailing underscore.


Example:
```
Remarks:    This is a multi-line remark.
            You only have to use the same indentation _
            on subsequent lines. 
            This improves readybility a lot!
```

Result:
```
{
    "remarks": "This is a multi-line remark.\nYou only have to use the same indentation on subsequent lines.\nThis improves readybility a lot!"
}
```

### Multi-line to Array Conversion

This is quite self explanatory.


Example:
```
Remarks[]:  This is a multi-line remark.
            Use the same indentation _
            on subsequent lines.
            This improves readybility a lot!
```

Result:
```
{
    "remarks": [
        "This is a multi-line remark.",
        "Use the same indentation on subsequent lines.",
        "This improves readybility a lot!"
    ]
}

```

### Full Example 

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

It's as easy as pie, isn't it? :)
---------------------------------
