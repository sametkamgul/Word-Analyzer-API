const updateHelper = require('../../../src/lib/helpers/updateHelper');

test('remove should delete character requested single character from text', () => {
    let data = 'This is a sample text.';
    let characters = 'i';
    let expectedResult = 'Ths s a sample text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});


test('remove should delete character requested multiple characters from text', () => {
    let data = 'This is a sample text.';
    let characters = 'i, a';
    let expectedResult = 'Ths s  smple text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});

test('remove should delete character requested multiple characters from text - extra whitesplace between characters', () => {
    let data = 'This is a sample text.';
    let characters = 'i, a';
    let expectedResult = 'Ths s  smple text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});

test('remove should not delete anything. requested empty character', () => {
    let data = 'This is a sample text.';
    let characters = '';
    let expectedResult = 'This is a sample text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});


test('remove should delete word requested single character from text', () => {
    let data = 'This is a sample text.';
    let characters = 'i';
    let expectedResult = 'Ths s a sample text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});


test('remove should delete word requested multiple characters from text', () => {
    let data = 'This is a sample text.';
    let characters = 'i, a';
    let expectedResult = 'Ths s  smple text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});

test('remove should delete word requested multiple characters from text - extra whitesplace between characters', () => {
    let data = 'This is a sample text.';
    let characters = 'This, is';
    let expectedResult = '  a sample text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});

test('remove should not delete anything. requested empty character', () => {
    let data = 'This is a sample text.';
    let characters = '';
    let expectedResult = 'This is a sample text.';

    let actualResult = updateHelper.remove(data, characters);

    expect(actualResult).toEqual(expectedResult);
});