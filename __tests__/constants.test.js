const constants = require('../lib/constants/constants');

test('constants should be existed', () => {
    let expectedResult = {
        language: 'LANGUAGE',
        characters: 'CHARACTERS',
        words: 'WORDS',
        hashtag: 'HASHTAG',
        sentences: 'SENTENCES',
        search: 'SEARCH',
        numbers: 'NUMBERS',
        specialCharacters: 'SPECIALCHARACTERS',
    };

    let actualResult = constants.analyzeResponseParams;

    expect(actualResult).toEqual(expectedResult);
});
