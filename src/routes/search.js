const express = require('express');
const { isEmpty } = require('../lib/helpers/generalHelper');
const searchHelper = require('../lib/helpers/searchHelper');

const router = express.Router();

router.get('/', (req, res) => {
    let result = {};
    let statusCode;

    console.log('/search is requested');

    const data = req.body.text;
    const searchKeywords = req.body.searchKeywords;

    if (!isEmpty(data) && !isEmpty(searchKeywords)) {
        result = searchHelper.findText(data, searchKeywords);

        statusCode = 200;
    } else {
        result.status = 'error';
        result.message = '<text> and <searchKeywords> could not be empty!';
        statusCode = 400;
    }

    res.status(statusCode).json(result);
});

module.exports = router;
