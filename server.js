const badWordsChecker = require('./lib/badWords');
const languageDetection = require('./lib/languageDetection');
const generalHelper = require('./lib/general');

const inputText = 'Thank you very much';
const textWithBadWords = 'I am not an asshole'
const textWithHashtag = 'It is a text with #hashtag with another #one. Even with the third one #forallworld.';

console.log('bad word check:', badWordsChecker.hasBadWord(textWithBadWords));

languageDetection.detect(inputText).then((result) => {
    console.log('language detection', result);
});

console.log('word counter', generalHelper.wordCounter(inputText));
console.log('char counter', generalHelper.charCounter(inputText));
console.log('find hashtag', generalHelper.findHashtag(textWithHashtag));
console.log('find text', generalHelper.findText(textWithHashtag, 'Even'));
console.log('get words as list', generalHelper.getWords(textWithHashtag));
console.log('get characters as list', generalHelper.getCharacters(textWithHashtag));
console.log('get character map', generalHelper.getCharactersMap(textWithHashtag));
console.log('get sentence', generalHelper.getSentences(textWithHashtag));