const constants = require('../lib/constants/constants');

test('constants->analyzeResponseParams should be existed', () => {
    let expectedResult = {
        language: 'LANGUAGE',
        characters: 'CHARACTERS',
        words: 'WORDS',
        hashtag: 'HASHTAG',
        mention: 'MENTION',
        sentences: 'SENTENCES',
        search: 'SEARCH',
        numbers: 'NUMBERS',
        specialCharacters: 'SPECIALCHARACTERS',
    };

    let actualResult = constants.analyzeResponseParams;

    expect(actualResult).toEqual(expectedResult);
});

test('constants->specialCharacters should be existed', () => {
    let expectedResult = {
        hash: '#',
        at: '@',
    };

    let actualResult = constants.specialCharacters;

    expect(actualResult).toEqual(expectedResult);
});
