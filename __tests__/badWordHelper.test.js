const badWordHelper = require('../lib/helpers/badWordHelper');

test('hasBadWord should return an object with empty array and length:0', () => {
    let words = 'this is an text.';
    let expectedResult = {
        array: [],
        length: 0,
    };

    let actualResult = badWordHelper.hasBadWord(words);

    expect(actualResult).toEqual(expectedResult);
});

test('hasBadWord should return an object with bad word array and length:2', () => {
    let words =
        'this is an text with ass and bitch sorry this test has to be done!';
    let expectedResult = {
        array: ['ass', 'bitch'],
        length: 2,
    };

    let actualResult = badWordHelper.hasBadWord(words);

    expect(actualResult).toEqual(expectedResult);
});

test('hasBadWord should return an object with empty array and length:0 for null, no param, undefined and empty string', () => {
    let expectedResult = {
        array: [],
        length: 0,
    };
    let actualResult;

    actualResult = badWordHelper.hasBadWord(null);

    expect(actualResult).toEqual(expectedResult);

    actualResult = badWordHelper.hasBadWord();

    expect(actualResult).toEqual(expectedResult);

    actualResult = badWordHelper.hasBadWord(undefined);

    expect(actualResult).toEqual(expectedResult);

    actualResult = badWordHelper.hasBadWord('');

    expect(actualResult).toEqual(expectedResult);
});
