const analyzeHelper = require('../../../src/lib/helpers/analyzeHelper');

test('analyze should return all attribute object for empty config', async () => {
    let text = 'this is a text.';
    let config = '';
    let searchKeywords = '';
    let expectedResult = {
        language: {
            name: 'Scots',
            code: 'sco',
        },
        search: [],
        characters: {
            array: {
                withoutWhiteSpace: {
                    array: [
                        '.',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 12,
                },
                withWhiteSpace: {
                    array: [
                        ' ',
                        ' ',
                        ' ',
                        '.',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 15,
                },
            },
            map: {
                '.': 1,
                a: 1,
                e: 1,
                h: 1,
                i: 2,
                s: 2,
                t: 3,
                x: 1,
            },
        },
        specialChars: {
            array: [' ', ' ', ' ', '.'],
            length: 4,
            map: {
                ' ': 3,
                '.': 1,
            },
        },
        words: {
            badWords: {
                array: [],
                length: 0,
            },
            length: 4,
            array: ['this', 'is', 'a', 'text'],
            map: {
                this: 1,
                is: 1,
                a: 1,
                text: 1,
            },
        },
        hashtag: {
            withHashChar: [],
            withoutHashChar: [],
        },
        mention: {
            withAtChar: [],
            withoutAtChar: []
        },
        sentences: {
            array: ['this is a text'],
            length: 1,
        },
        numbers: {
            integers: {
                array: [],
                length: 0,
            },
            floats: {
                array: [],
                length: 0,
            },
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:language', async () => {
    let text =
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    let config = 'language';
    let searchKeywords = '';
    let expectedResult = {
        language: {
            name: 'English',
            code: 'eng',
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:characters', async () => {
    let text = 'this is a text.';
    let config = 'characters';
    let searchKeywords = '';
    let expectedResult = {
        characters: {
            array: {
                withoutWhiteSpace: {
                    array: [
                        '.',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 12,
                },
                withWhiteSpace: {
                    array: [
                        ' ',
                        ' ',
                        ' ',
                        '.',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 15,
                },
            },
            map: {
                '.': 1,
                a: 1,
                e: 1,
                h: 1,
                i: 2,
                s: 2,
                t: 3,
                x: 1,
            },
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:words', async () => {
    let text = 'this is a text.';
    let config = 'words';
    let searchKeywords = '';
    let expectedResult = {
        words: {
            badWords: {
                array: [],
                length: 0,
            },
            length: 4,
            array: ['this', 'is', 'a', 'text'],
            map: {
                this: 1,
                is: 1,
                a: 1,
                text: 1,
            },
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:hashtag', async () => {
    let text = 'this is a text with #sample hashtag.';
    let config = 'hashtag';
    let searchKeywords = '';
    let expectedResult = {
        hashtag: {
            withHashChar: ['#sample'],
            withoutHashChar: ['sample'],
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:mention', async () => {
    let text = 'this is a text with @sample mention.';
    let config = 'mention';
    let searchKeywords = '';
    let expectedResult = {
        mention: {
            withAtChar: ['@sample'],
            withoutAtChar: ['sample'],
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:sentences', async () => {
    let text =
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    let config = 'sentences';
    let searchKeywords = '';
    let expectedResult = {
        sentences: {
            array: [
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
                "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
                'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet',
                'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable',
                'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
            ],
            length: 5,
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:numbers', async () => {
    let text = 'this is a text with numbers 123 and 123.45.';
    let config = 'numbers';
    let searchKeywords = '';
    let expectedResult = {
        numbers: {
            integers: {
                array: [123],
                length: 1,
            },
            floats: {
                array: [123.45],
                length: 1,
            },
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});

test('analyze should return an object for requested config:specialCharacters', async () => {
    let text = "this is a text with special characters $,|' + and .";
    let config = 'specialCharacters';
    let searchKeywords = '';
    let expectedResult = {
        specialChars: {
            array: [
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                '$',
                ',',
                '|',
                "'",
                ' ',
                '+',
                ' ',
                ' ',
                '.',
            ],
            length: 16,
            map: {
                ' ': 10,
                $: 1,
                ',': 1,
                '|': 1,
                "'": 1,
                '+': 1,
                '.': 1,
            },
        },
    };

    let actualResult = await analyzeHelper.analyze(
        text,
        searchKeywords,
        config
    );

    expect(actualResult).toEqual(expectedResult);
});
