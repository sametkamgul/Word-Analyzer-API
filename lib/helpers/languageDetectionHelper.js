const languageDetect = require('text-language-detector');
const { isEmpty } = require('./generalHelper');

/**
 * detects the language of the text
 *
 * @param {String} text
 * @return {Object} - matched language and language code
 */
const detect = async (text) => {
    let result = {
        name: null,
        code: null,
    };

    if (!isEmpty(text)) {
        let language = await languageDetect(text);

        result.name = language.match_language_data.names;
        result.code = language.match_language;
    }

    return result;
};

module.exports = { detect };
