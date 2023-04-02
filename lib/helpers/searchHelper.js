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
    if (!generalHelper.isEmpty(text) && !generalHelper.isEmpty(searchKeywords)) {
        let searchKeywordsArray = searchKeywords.split(',');

        // trim empty spaces just in case
        searchKeywordsArray = searchKeywordsArray.map((s) => s.trim());

        const sentences = generalHelper.getSentences(text);
        const words = generalHelper.getWords(text);

        if (searchKeywordsArray.length > 0) {
            searchKeywordsArray.forEach((keyword) => {
                let sentencesHasKeyword = [];

                let searchResult = {
                    keyword: keyword,
                    exactCount: 0,
                    similarCount: 0,
                };

                if (keyword === '') return result;

                sentences.filter((s) => {
                    if (s.includes(keyword)) {
                        sentencesHasKeyword.push(s);
                    }
                });

                searchResult.sentences = sentencesHasKeyword;

                words.filter((w) => {
                    if (w === keyword) {
                        searchResult.exactCount++;
                    }

                    if (w.includes(keyword)) {
                        searchResult.similarCount++;
                    }
                });

                result.push(searchResult);
            });
        }
    }

    return result;
};

/**
 * finds a hashtag if the given text has one or more
 *
 * @param {String} words
 * @return {Array} - returns Array of hashtags with and without dash('#') character
 */
const findHashtag = (words) => {
    let result = {
        withHashChar: [],
        withoutHashChar: [],
    };
    let withHashChar = [];
    let withoutHashChar = [];

    if (!generalHelper.isEmpty(words)) {
        words.split(' ').filter((w) => {
            if (w[0] === '#') {
                withHashChar.push(w);
                withoutHashChar.push(w.substring(1, w.length));
            }
        });

        result.withHashChar = withHashChar;
        result.withoutHashChar = withoutHashChar;
    }

    return result;
};

module.exports = {
    findText,
    findHashtag,
};
