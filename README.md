# HTML-Tag-Parser

HTML Tag Parser helps in parsing a HTML or XML string making it consumable in any form like **React Native JSX** or simple HTML tag separating. Script returns an object containing text inside and outside of the desired tag, **in sequence** & clubbed by each tag's text. It is simpler and performant than regex.

## Installing
You can install **HTML Tag Parser** by including this file in your project like :

```HTML
<script src="src/html-tag-parser.js"></script>
```
or just copy paste the code in src/*html-tag-parser.js* file to your javascript code.


### Usage

**HTML Tag Parser** takes 2 parameters:
1. *HTML text to be parsed*
2. *Tag that needs to be picked*, in the text passed as param 1.

### Example

```javascript
var textToParse = "First few words <b>text inside first tag</b> free floating text <b>text inside the second tag</b> this is the end of statement";

var tagToPick = "<b>";   // always pass the opening tag ONLY

var parsed_object = HtmlParser(textToParse, tagToPick);

console.log(parsed_object);

```

This will print an object :

```javascript
//  parsed_object
{
    startText: "First few words ",
    textArray : [
        {
            textAfterTag : " free floating text ",
            textInsideTag : "text inside first tag"
        },
        {
            textAfterTag : " this is the end of statement",
            textInsideTag : "text inside the second tag"
        },
    ]
}

```

## Limitations

This code only works for one HTML tag at a time. Multiple tags in the passed string will be parsed only for the tag passed as second parameter to the function.

Nested HTML may not yeild the desired results.
