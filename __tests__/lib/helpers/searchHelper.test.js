const searchHelper = require('../../../src/lib/helpers/searchHelper');

test('findText should return an object for no result', () => {
    let data = 'this is a text';
    let searchKeywords = 'find';
    let expectedResult = [
        {
            keyword: 'find',
            exact: {
                sentences: [],
            },
            similar: {
                sentences: [],
            },
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return an object for no result and no search keyword', () => {
    let data = 'this is a text.';
    let searchKeywords = '';
    let expectedResult = [];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return array for single result found', () => {
    let data = 'this is a text.';
    let searchKeywords = 'this';
    let expectedResult = [
        {
            keyword: 'this',
            exact: {
                sentences: ['this is a text'],
            },
            similar: {
                sentences: [],
            },
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findText should return array for multiple result found', () => {
    let data = 'this is a text.';
    let searchKeywords = 'this,is';
    let expectedResult = [
        {
            keyword: 'this',
            exact: {
                sentences: ['this is a text'],
            },
            similar: {
                sentences: [],
            },
        },
        {
            keyword: 'is',
            exact: {
                sentences: ['this is a text'],
            },
            similar: {
                sentences: ['this is a text'],
            },
        },
    ];

    let actualResult = searchHelper.findText(data, searchKeywords);

    expect(actualResult).toEqual(expectedResult);
});

test('findHashtags should return a object of hashtags', () => {
    let text = 'It is a #text with #hashtag.';
    let expectedResult = {
        withHashChar: ['#text', '#hashtag'],
        withoutHashChar: ['text', 'hashtag'],
    };

    let actualResult = searchHelper.findHashtags(text);

    expect(actualResult).toEqual(expectedResult);
});

test('findHashtags should return a object with empty array values for no hashtag in the text', () => {
    let text = 'It is a text without hashtag.';
    let expectedResult = {
        withHashChar: [],
        withoutHashChar: [],
    };

    let actualResult = searchHelper.findHashtags(text);

    expect(actualResult).toEqual(expectedResult);
});

test('findMentions should return a object of mentions', () => {
    let text = 'It is a @text with @mention.';
    let expectedResult = {
        withAtChar: ['@text', '@mention'],
        withoutAtChar: ['text', 'mention'],
    };

    let actualResult = searchHelper.findMentions(text);

    expect(actualResult).toEqual(expectedResult);
});

test('findMentions should return a object with empty array values for no mentions in the text', () => {
    let text = 'It is a text without mention.';
    let expectedResult = {
        withAtChar: [],
        withoutAtChar: [],
    };

    let actualResult = searchHelper.findMentions(text);

    expect(actualResult).toEqual(expectedResult);
});
