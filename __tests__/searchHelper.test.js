const searchHelper = require('../lib/helpers/searchHelper');

test('findText should return an object for no result', () => {
    let data = 'this is a text';
    let searchKeywords = 'find';
    let expectedResult = [
        {
            keyword: 'find',
            exactCount: 0,
            similarCount: 0,
            sentences: [],
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return an object for no result and no search keyword', () => {
    let data = 'this is a text';
    let searchKeywords = '';
    let expectedResult = [];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return array for single result found', () => {
    let data = 'this is a text';
    let searchKeywords = 'this';
    let expectedResult = [
        {
            exactCount: 1,
            keyword: 'this',
            similarCount: 1,
            sentences: ['this is a text'],
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return array for multiple result found', () => {
    let data = 'this is a text';
    let searchKeywords = 'this,is';
    let expectedResult = [
        {
            exactCount: 1,
            keyword: 'this',
            similarCount: 1,
            sentences: ['this is a text'],
        },
        {
            exactCount: 1,
            keyword: 'is',
            similarCount: 2,
            sentences: ['this is a text'],
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findHashtag should return a object of hastags', () => {
    let text = 'It is a #text with #hashtag';
    let expectedResult = {
        withHashChar: ['#text', '#hashtag'],
        withoutHashChar: ['text', 'hashtag'],
    };

    let actualResult = searchHelper.findHashtag(text);

    expect(actualResult).toEqual(expectedResult);
});

test('findHashtag should return a object with empty array values for no hashtag in the text', () => {
    let text = 'It is a text with hashtag.';
    let expectedResult = {
        withHashChar: [],
        withoutHashChar: [],
    };

    let actualResult = searchHelper.findHashtag(text);

    expect(actualResult).toEqual(expectedResult);
});
