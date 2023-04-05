const express = require('express');
const { isEmpty } = require('../lib/helpers/generalHelper');
const update = require('../lib/helpers/updateHelper');

const router = express.Router();

router.post('/characters', (req, res) => {
    let result = {};
    let statusCode;

    console.log('/update/characters is requested');

    const data = req.body.text;
    const characters = req.body.characters;
    const newCharacter = req.body.newCharacter;

    // assign requested parameters to the response object
    result.characters = characters;
    result.newCharacter = newCharacter;

    if (!isEmpty(data)) {
        if (!isEmpty(newCharacter)) {
            result.text = update.replaceCharacters(
                data,
                characters,
                newCharacter
            );
        } else {
            result.text = update.removeCharacters(data, characters);
        }

        statusCode = 200;
    } else {
        result = {
            status: 'error',
            message: '<text> parameter is missing in the request of the body!',
        };

        statusCode = 400;
    }

    res.status(statusCode).json(result);
});

router.post('/words', (req, res) => {
    let result = {
        text: '',
        words: '',
        newWord: '',
    };

    console.log('/update/words is requested');

    const data = req.body.text;
    const words = req.body.words;
    const newWord = req.body.newWord;

    // assign requested parameters to the response object
    result.words = words;
    result.newWord = newWord;

    if (data !== null && data !== undefined && data !== '') {
        if (newWord !== null && newWord !== undefined && newWord !== '') {
            result.text = update.replaceWords(data, words, newWord);
        } else {
            result.text = update.removeWords(data, words);
        }

        res.status(200).json(result);

        return;
    }

    res.status(400).json({
        status: 'error',
        message: '<text> parameter is missing in the request of the body!',
    });
});

module.exports = router;
