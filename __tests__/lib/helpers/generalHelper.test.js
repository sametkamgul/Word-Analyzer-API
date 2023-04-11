const generalHelper = require('../../../src/lib/helpers/generalHelper');

test('wordCounter should return a valid value', () => {
    let data = 'this is an example text';
    let expectedResult = 5;

    let actualResult = generalHelper.wordCounter(data);

    expect(actualResult).toBe(expectedResult);
});

test('wordCounter should return 0 for empty string', () => {
    let data = '';
    let expectedResult = 0;

    let actualResult = generalHelper.wordCounter(data);

    expect(actualResult).toBe(expectedResult);
});

test('charCounter should return a valid value', () => {
    let data = 'this is an example text';
    let expectedResult = 23;

    let actualResult = generalHelper.charCounter(data);

    expect(actualResult).toBe(expectedResult);
});

test('charCounter should return 0 for empty string', () => {
    let data = '';
    let expectedResult = 0;

    let actualResult = generalHelper.charCounter(data);

    expect(actualResult).toBe(expectedResult);
});

test('getWords should have a valid array length', () => {
    let data = 'this is an example text';
    let expectedResult = ['this', 'is', 'an', 'example', 'text'];

    let actualResult = generalHelper.getWords(data);

    expect(actualResult).toHaveLength(expectedResult.length);
});

test('getWords should return a words array', () => {
    let data = 'this is an example text';
    let expectedResult = ['this', 'is', 'an', 'example', 'text'];

    let actualResult = generalHelper.getWords(data);

    expect(actualResult).toEqual(expectedResult);
});

test('getWords should have an array of length: 1', () => {
    let data = '';
    let expectedResult = [''];

    let actualResult = generalHelper.getWords(data);

    expect(actualResult).toHaveLength(expectedResult.length);
});

test('getCharacters, withoutWhiteSpace object should have a valid array length', () => {
    let data = 'this is an example text';
    let expectedResult = [
        't',
        'h',
        'i',
        's',
        'i',
        's',
        'a',
        'n',
        'e',
        'x',
        'a',
        'm',
        'p',
        'l',
        'e',
        't',
        'e',
        'x',
        't',
    ];

    let actualResult =
        generalHelper.getCharacters(data).withoutWhiteSpace.array;

    expect(actualResult).toHaveLength(expectedResult.length);
});

test('getCharacters, withoutWhiteSpace object should return a characters array', () => {
    let data = 'this is an example text';
    let expectedResult = [
        't',
        'h',
        'i',
        's',
        'i',
        's',
        'a',
        'n',
        'e',
        'x',
        'a',
        'm',
        'p',
        'l',
        'e',
        't',
        'e',
        'x',
        't',
    ];

    let actualResult =
        generalHelper.getCharacters(data).withoutWhiteSpace.array;

    expect(actualResult).toEqual(expectedResult.sort());
});

test('getCharacters should have an array of length: 1', () => {
    let data = '';
    let expectedResult = [];

    let actualResult =
        generalHelper.getCharacters(data).withoutWhiteSpace.array;

    expect(actualResult).toHaveLength(expectedResult.length);
});

test('getWordsMap should return an valid map of object', () => {
    let data = 'this is an text';
    let expectedResult = {
        an: 1,
        is: 1,
        text: 1,
        this: 1,
    };

    let actualResult = generalHelper.getWordsMap(data);

    expect(actualResult).toEqual(expectedResult);
});

test('getCharactersMap should return an valid map of object', () => {
    let data = 'this is an text';
    let expectedResult = {
        a: 1,
        e: 1,
        h: 1,
        i: 2,
        n: 1,
        s: 2,
        x: 1,
        t: 3,
    };

    let actualResult = generalHelper.getCharactersMap(data);

    expect(actualResult).toEqual(expectedResult);
});

test('getSentences should return an valid array', () => {
    let data = 'This is a sentence. This is another sentence.';
    let expectedResult = ['This is a sentence', 'This is another sentence'];

    let actualResult = generalHelper.getSentences(data);

    expect(actualResult).toEqual(expectedResult);
});

test('findIntegers should return an valid array', () => {
    let data = 'this text has 100 integer';
    let expectedResult = [100];

    let actualResult = generalHelper.findIntegers(data);

    expect(actualResult).toEqual(expectedResult);
});

test('findFloats should return an valid array', () => {
    let data = 'this text has 123.45 float';
    let expectedResult = [123.45];

    let actualResult = generalHelper.findFloats(data);

    expect(actualResult).toEqual(expectedResult);
});

test('isEmpty should return true for null variable', () => {
    let data = null;
    let expectedResult = true;

    let actualResult = generalHelper.isEmpty(data);

    expect(actualResult).toBe(expectedResult);
});

test('isEmpty should return true for undefined variable', () => {
    let data = undefined;
    let expectedResult = true;

    let actualResult = generalHelper.isEmpty(data);

    expect(actualResult).toBe(expectedResult);
});

test('isEmpty should return true for empty string', () => {
    let data = '';
    let expectedResult = true;

    let actualResult = generalHelper.isEmpty(data);

    expect(actualResult).toBe(expectedResult);
});

test('isParamRequested should return false for not wanted parameter', () => {
    let config = 'words,numbers';
    let parameter = 'characters';
    let expectedResult = false;

    let actualResult = generalHelper.isParamRequested(config, parameter);

    expect(actualResult).toBe(expectedResult);
});

test('isParamRequested should return true for wanted character', () => {
    let config = 'words,numbers';
    let parameter = 'words';
    let expectedResult = true;

    let actualResult = generalHelper.isParamRequested(config, parameter);

    expect(actualResult).toBe(expectedResult);
});

test('isParamRequested should return true for empty character parameter', () => {
    let config = 'words,numbers';
    let parameter = '';
    let expectedResult = false;

    let actualResult = generalHelper.isParamRequested(config, parameter);

    expect(actualResult).toBe(expectedResult);
});

test('isParamRequested should return true for null character parameter', () => {
    let config = 'words,numbers';
    let parameter = null;
    let expectedResult = false;

    let actualResult = generalHelper.isParamRequested(config, parameter);

    expect(actualResult).toBe(expectedResult);
});

test('isParamRequested should return true for undefined character parameter', () => {
    let config = 'words,numbers';
    let parameter = undefined;
    let expectedResult = false;

    let actualResult = generalHelper.isParamRequested(config, parameter);

    expect(actualResult).toBe(expectedResult);
});

test('getSpecialCharacters should return an object with empty array, empty map object, and length:0', () => {
    let text = 'text';
    let expectedResult = [];

    let actualResult = generalHelper.getSpecialCharacters(text);

    expect(actualResult).toEqual(expectedResult);
});

test('getSpecialCharacters should return an object for empty text with empty array,empty map object and length:0', () => {
    let text = '';
    let expectedResult = [];

    let actualResult = generalHelper.getSpecialCharacters(text);

    expect(actualResult).toEqual(expectedResult);
});

test('getSpecialCharactersMap should return an object for empty text with empty array, empty map object and length:0', () => {
    let text = '';
    let expectedResult = {};

    let actualResult = generalHelper.getSpecialCharacterMap(text);

    expect(actualResult).toEqual(expectedResult);
});

test('getSpecialCharactersMap should return an object with empty array, empty map object and length:0', () => {
    let text = 'text';
    let expectedResult = {};

    let actualResult = generalHelper.getSpecialCharacterMap(text);

    expect(actualResult).toEqual(expectedResult);
});

test('getSpecialCharactersMap should return an object with array and length:16', () => {
    let text = "this is a text with special characters $,|' + and .";
    let expectedResult = {
        ' ': 10,
        $: 1,
        ',': 1,
        '|': 1,
        "'": 1,
        '+': 1,
        '.': 1,
    };

    let actualResult = generalHelper.getSpecialCharacterMap(text);

    expect(actualResult).toEqual(expectedResult);
});
