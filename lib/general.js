const wordCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.split(' ').length;
};

const charCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.length;
};

const findHashtag = (words) => {
    let result = [];

    if (words === null || words === undefined || words === '') return result;

    result = words.split(' ').filter((w) => w[0] === '#');

    return result;
};

const findText = (words, word) => {
    let result = {
        word: word,
        exactCount: 0,
        similarCount: 0,
    };

    words.split(' ').filter((w) => {
        if (w === word) {
            result.exactCount++;
        }
    });

    words.split(' ').filter((w) => {
        if (w.includes(word)) {
            result.similarCount++;
        }
    });

    return result;
};

module.exports = {
    wordCounter,
    charCounter,
    findHashtag,
    findText,
    findText,
};
