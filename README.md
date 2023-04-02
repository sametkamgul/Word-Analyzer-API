# words analyzer API: girilen cümle üzerinde analiz yapılması.

## features

### analyze

-   bad word analyze
-   how many words and character does it have
-   language detection
-   number of repitition of words
-   number of repitition of character
-   used special characters
-   hashtag extraction
-   finding a character or word in the text.
-   array of words

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
    hashtag: {},        // hashtag found in the given text
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

### hashtag object detail

```
{
    withoutHashChar: []     // hashtag word without hash(#) character
    withHashChar: []        // hashtag word with hash(#) character
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

### GET /analyze

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 ass Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "search": "an,An"
}
```

-   example response JSON:

```
{
    "language": {
        "code": "English",
        "name": "eng"
    },
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
    "words": {
        "badWords": {
            "list": [],
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
            "#one.",
            "1.6",
            "Even",
            "with",
            "the",
            "third",
            "one",
            "#forallworld.",
            "And",
            "I",
            "have",
            "100.5",
            "dollars",
            "and",
            "5",
            "pennies."
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
            "#one.": 1,
            "1.6": 1,
            "Even": 1,
            "the": 1,
            "third": 1,
            "one": 1,
            "#forallworld.": 1,
            "And": 1,
            "I": 1,
            "have": 1,
            "100.5": 1,
            "dollars": 1,
            "and": 1,
            "pennies.": 1
        }
    },
    "hashtag": {
        "withHashChar": [
            "#hashtag",
            "#one.",
            "#forallworld."
        ],
        "withoutHashChar": [
            "hashtag",
            "one.",
            "forallworld."
        ]
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

### GET /search - search a text or character in the given text

-   example request body as JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 ass Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "searchKeywords": "an,An"
}
```

-   example response JSON

```
[
    {
        "keyword": "an",
        "exactCount": 0,
        "similarCount": 1,
        "sentences": [
            "5 dollars and 5 pennies"
        ]
    },
    {
        "keyword": "An",
        "exactCount": 0,
        "similarCount": 1,
        "sentences": [
            "And I have 100"
        ]
    }
]
```

### POST /update/characters - updating characters with new one

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "characters": "a,i",
    "newCharacter": "."
}
```

-   example response JSON:

```
{
    "characters": "a,i",
    "newCharacter": ".",
    "text": "It .s . text w.th #h.sht.g w.th 2 #one. 1.6. Even w.th the th.rd one #for.llworld. And I h.ve 100.5 doll.rs .nd 5 penn.es."
}
```

### POST /update/characters - removing characters

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6. Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "characters": "a,i"
}
```

-   example response JSON:

```
{
    "characters": "a,i",
    "text": "It s a text wth #hashtag wth 2 #one. 1.6. Even wth the thrd one #forallworld. And I have 100.5 dollars and 5 pennes."
}
```

### POST /update/words - updating words with new one

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6. Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "words": "with,and,the",
    "newWord": "!!!",
}
```

-   example response JSON:

```
{
    "text": "It is a text !!! #hashtag !!! 2 #one. 1.6 Even !!! !!! third one #forallworld. And I have 100.5 dollars !!! 5 pennies.",
    "words": "with,and,the",
    "newWord": "!!!"
}
```

### POST /update/words - removing words

-   example request body JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 ass Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "words": "with,and,the"
}
```

-   example response JSON:

```
{
    "text": "It is a text with #hashtag with 2 #one. 1.6 ass Even with  third one #forallworld. And I have 100.5 dollars and 5 pennies.",
    "words": "with,and,the",
}
```

## TODO:

-   units tests
-   netlify modification for deploy -- last step before publish
