const { specialCharacters } = require('../constants/constants');
const generalHelper = require('./generalHelper');

/**
 * search a string in the given string.
 *
 * @param {String} text
 * @param {String} searchKeywords - string(s) to be searched
 * @return {Object} - returns the the word, exact count and similar one as object
 */
const findText = (text, searchKeywords) => {
    let result = [];

    // null check
    if (
        !generalHelper.isEmpty(text) &&
        !generalHelper.isEmpty(searchKeywords)
    ) {
        let searchKeywordsArray = searchKeywords.split(',');

        // trim empty spaces just in case
        searchKeywordsArray = searchKeywordsArray.map((s) => s.trim());

        const sentences = generalHelper.getSentences(text);

        if (searchKeywordsArray.length > 0) {
            searchKeywordsArray.forEach((keyword) => {
                let similarSentences = [];
                let exactSentences = [];

                let searchResult = {
                    keyword: keyword,
                    exact: {
                        sentences: [],
                    },
                    similar: {
                        sentences: [],
                    },
                };

                if (keyword === '') return result;

                // similar result sentence assign
                sentences.filter((s) => {
                    if (!s.includes(keyword) && s.toLowerCase().includes(keyword.toLowerCase())) {
                        similarSentences.push(s);
                    }
                });

                // exact result sentence assign
                sentences.filter((s) => {
                    if (s.includes(keyword)) {
                        exactSentences.push(s);
                    }
                });

                searchResult.exact.sentences = exactSentences;
                searchResult.similar.sentences = similarSentences;

                result.push(searchResult);
            });
        }
    }

    return result;
};

/**
 * finds a hashtag if the given text has one or more
 *
 * @param {String} text
 * @return {Array} - returns Array of hashtags with and without dash('#') character
 */
const findHashtag = (text) => {
    let result = {
        withHashChar: [],
        withoutHashChar: [],
    };
    let withHashChar = [];
    let withoutHashChar = [];

    if (!generalHelper.isEmpty(text)) {
        text.split(' ').filter((w) => {
            if (w[0] === specialCharacters.hash) {
                // removes dot when the it is the last word of the string
                if (w[w.length - 1] === '.') {
                    w = w.substring(0, w.length - 1);
                }

                withHashChar.push(w);
                withoutHashChar.push(w.substring(1, w.length));
            }
        });

        result.withHashChar = withHashChar;
        result.withoutHashChar = withoutHashChar;
    }

    return result;
};

/**
 * finds a mention(@) if the given text has one or more
 *
 * @param {String} text
 * @return {Array} - returns Array of mentions with and without at('@') character
 */
const findMention = (text) => {
    let result = {
        withAtChar: [],
        withoutAtChar: [],
    };
    let withAtChar = [];
    let withoutAtChar = [];

    if (!generalHelper.isEmpty(text)) {
        text.split(' ').filter((w) => {
            if (w[0] === specialCharacters.at) {
                // removes dot when the it is the last word of the string
                if (w[w.length - 1] === '.') {
                    w = w.substring(0, w.length - 1);
                }

                withAtChar.push(w);
                withoutAtChar.push(w.substring(1, w.length));
            }
        });

        result.withAtChar = withAtChar;
        result.withoutAtChar = withoutAtChar;
    }

    return result;
};

module.exports = {
    findText,
    findHashtag,
    findMention,
};
