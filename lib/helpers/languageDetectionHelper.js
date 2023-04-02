const languageDetect = require('text-language-detector');
const { isEmpty } = require('./generalHelper');

/**
 * detects the language of the text
 *
 * @param {String} words
 * @return {Object} - matched language and language code
 */
const detect = async (words) => {
    let result = {
        name: null,
        code: null,
    };

    if (!isEmpty(words)) {
        let language = await languageDetect(words);

        result.name = language.match_language_data.names;
        result.code = language.match_language;
    }

    return result;
};

module.exports = { detect };
