# words analyzer API: analyze tool api

## features

### analyze

-   bad word analyze
-   language detection
-   words map (number of repitition of words)
-   characters map (number of repitition of character)
-   used special characters
-   hashtags extraction
-   mentions extraction
-   finding a character or word in the text.
-   array of words
-   array of sentences

### manipulation

-   removing character(s) or word(s) from text
-   replacing character(s) or word(s) with desired one

## installation

```
npm i
```

or

```
npm install
```

## tests

### run tests

```
npm run test
```

### run test coverage

```
npm run test:coverage
```

## root Object Detail

```
{
    language: {},       // language of the given text
    characters: {},     // characters found in the given text
    words: {},      // words found in the given text
    hashtags: {},        // hashtags found in the given text
    mentions: {},        // mentions found in the given text
    sentences: {},      // sentences found in the given text
    search: {},     // search results found in the given text
    numbers: {}     // numbers found in the given text
}
```

## more details on inner objects

### language object detail

```
{
    "code": "English",      // name of the most possible language
    "name": "eng"       // language code
}
```

### characters object detail

```
{
    array: {
        withoutWhiteSpace: {        // white spaces are not taken into account
            array: [],       // all characters used in the given text
            length: 0       // length of the array
        },
        withWhiteSpace: {       // white spaces are taken into account
            array: [],      // all characters used in the given text
            length: 0       // length of the array
        }
    },
    map: {}     // frequency map of the characters
}
```

### words object detail

```
{
    badWords: {     // bad word analyze on the given text
        list: [],       // list of bad words
        length: 0       // length of the array
    },
    array: []       // words array seperated by white space
    map: {}     // frequency map of the words
}
```

### hashtags object detail

```
{
    withoutHashChar: []     // hashtag word without hash(#) character
    withHashChar: []        // hashtag word with hash(#) character
}
```

### mentions object detail

```
{
    withoutAtChar: []     // mention word without at(@) character
    withAtChar: []        // mention word with at(@) character
}
```

### sentences object detail

```
{
    array: []       // sentence array
    length: 0       // length of the array
}
```

### search object detail

```
{
    keyword: "",        // search keyword in the request
    exactCount: 0,      // exact keyword found in the given text
    similarCount: 0,        // similar keyword found in the given text. i.e: 'text' in the 'texture'
    sentences: []       // keyword belongs to which sentence
}
```

### numbers object detail

```
{
    integers: {
        array: [],      // array of integers found in the given text
        length: 0       // length of the array
    },
    floats: {
        array: [],      // array of float found in the given text
        length: 0       // length of the array
    }
}
```

## /analyze request config - selected response data could be selected

-   allowed parameters. parameters should be seperated by comma(,) as string

```
language
characters
words
hashtag
sentences
search
numbers
```

-   example config

```
'words, language, characters'
```

## endpoints

### POST /analyze

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "searchKeywords": "text",
    "config": ""
}
```

-   example response JSON:

```
{
    "language": {
        "name": "English",
        "code": "eng"
    },
    "search": [
        {
            "keyword": "text",
            "exactCount": 1,
            "similarCount": 1,
            "sentences": [
                "It is a text with #hashtag with 2 #one"
            ]
        }
    ],
    "characters": {
        "array": {
            "withoutWhiteSpace": {
                "array": [
                    "#",
                    "#",
                    "#",
                    ".",
                    ".",
                    ".",
                    ".",
                    ".",
                    "0",
                    "0",
                    "1",
                    "1",
                    "2",
                    "5",
                    "5",
                    "6",
                    "A",
                    "E",
                    "I",
                    "I",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "d",
                    "d",
                    "d",
                    "d",
                    "d",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "f",
                    "g",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "i",
                    "i",
                    "i",
                    "i",
                    "i",
                    "i",
                    "l",
                    "l",
                    "l",
                    "l",
                    "l",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "o",
                    "o",
                    "o",
                    "o",
                    "o",
                    "p",
                    "r",
                    "r",
                    "r",
                    "r",
                    "s",
                    "s",
                    "s",
                    "s",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "v",
                    "v",
                    "w",
                    "w",
                    "w",
                    "w",
                    "x"
                ],
                "length": 98
            },
            "withWhiteSpace": {
                "array": [
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    "#",
                    "#",
                    "#",
                    ".",
                    ".",
                    ".",
                    ".",
                    ".",
                    "0",
                    "0",
                    "1",
                    "1",
                    "2",
                    "5",
                    "5",
                    "6",
                    "A",
                    "E",
                    "I",
                    "I",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "a",
                    "d",
                    "d",
                    "d",
                    "d",
                    "d",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "e",
                    "f",
                    "g",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "h",
                    "i",
                    "i",
                    "i",
                    "i",
                    "i",
                    "i",
                    "l",
                    "l",
                    "l",
                    "l",
                    "l",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "n",
                    "o",
                    "o",
                    "o",
                    "o",
                    "o",
                    "p",
                    "r",
                    "r",
                    "r",
                    "r",
                    "s",
                    "s",
                    "s",
                    "s",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "t",
                    "v",
                    "v",
                    "w",
                    "w",
                    "w",
                    "w",
                    "x"
                ],
                "length": 121
            }
        },
        "map": {
            "0": 2,
            "1": 2,
            "2": 1,
            "5": 2,
            "6": 1,
            "#": 3,
            ".": 5,
            "A": 1,
            "E": 1,
            "I": 2,
            "a": 7,
            "d": 5,
            "e": 8,
            "f": 1,
            "g": 1,
            "h": 8,
            "i": 6,
            "l": 5,
            "n": 7,
            "o": 5,
            "p": 1,
            "r": 4,
            "s": 4,
            "t": 9,
            "v": 2,
            "w": 4,
            "x": 1
        }
    },
    "specialChars": {
        "array": [
            " ",
            " ",
            " ",
            " ",
            " ",
            "#",
            " ",
            " ",
            " ",
            "#",
            ".",
            " ",
            ".",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "#",
            ".",
            " ",
            " ",
            " ",
            " ",
            ".",
            " ",
            " ",
            " ",
            " ",
            "."
        ],
        "length": 31,
        "map": {
            " ": 23,
            "#": 3,
            ".": 5
        }
    },
    "words": {
        "badWords": {
            "array": [],
            "length": 0
        },
        "length": 24,
        "array": [
            "It",
            "is",
            "a",
            "text",
            "with",
            "#hashtag",
            "with",
            "2",
            "#one",
            "1.6",
            "Even",
            "with",
            "the",
            "third",
            "one",
            "#forallworld",
            "And",
            "I",
            "have",
            "100.5",
            "dollars",
            "and",
            "5",
            "pennies"
        ],
        "map": {
            "2": 1,
            "5": 1,
            "It": 1,
            "is": 1,
            "a": 1,
            "text": 1,
            "with": 3,
            "#hashtag": 1,
            "#one": 1,
            "1.6": 1,
            "Even": 1,
            "the": 1,
            "third": 1,
            "one": 1,
            "#forallworld": 1,
            "And": 1,
            "I": 1,
            "have": 1,
            "100.5": 1,
            "dollars": 1,
            "and": 1,
            "pennies": 1
        }
    },
    "hashtag": {
        "withHashChar": [
            "#hashtag",
            "#one",
            "#forallworld"
        ],
        "withoutHashChar": [
            "hashtag",
            "one",
            "forallworld"
        ]
    },
    "mentions": {
        "withAtChar": [],
        "withoutAtChar": []
    },
    "sentences": {
        "array": [
            "It is a text with #hashtag with 2 #one",
            "1",
            "6 Even with the third one #forallworld",
            "And I have 100",
            "5 dollars and 5 pennies"
        ],
        "length": 5
    },
    "numbers": {
        "integers": {
            "array": [
                2,
                5
            ],
            "length": 2
        },
        "floats": {
            "array": [
                1.6,
                100.5
            ],
            "length": 2
        }
    }
}
```

### POST /update
#### updating characters or words with new one

-   example request body JSON:

```
{
    "text": "This is a sample text.",
    "keywords": "is, a",
    "newKeyword": "*"
}
```

-   example response JSON:

```
{
    "keywords": "is, a",
    "newKeyword": "*",
    "text": "Th* * * s*mple text."
}
```

#### removing characters or words with new one
-   example request body JSON:

```
{
    "text": "This is a sample text.",
    "keywords": "is, a"
}
```

-   example response JSON:

```
{
    "keywords": "is, a",
    "text": "Th   smple text."
}
```

## TODO:
