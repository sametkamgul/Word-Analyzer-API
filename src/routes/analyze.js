const express = require('express');
const analyzer = require('../lib/helpers/analyzeHelper');
const { isEmpty } = require('../lib/helpers/generalHelper');

const router = express.Router();

router.post('/', async (req, res) => {
    let result = {};
    let statusCode;

    console.log('/analyze is requested');

    const data = req.body.text;
    const searchKeywords = req.body.searchKeywords;
    const config = req.body.config;

    if (!isEmpty(data)) {
        result = await analyzer.analyze(data, searchKeywords, config);

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

module.exports = router;
