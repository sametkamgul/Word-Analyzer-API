const express = require('express');
const { isEmpty } = require('../lib/helpers/generalHelper');
const update = require('../lib/helpers/updateHelper');

const router = express.Router();

router.post('/', (req, res) => {
    let result = {};
    let statusCode;

    console.log('/update/ is requested');

    const data = req.body.text;
    const keywords = req.body.keywords;
    const newKeyword = req.body.newKeyword;

    // assign requested parameters to the response object
    result.keywords = keywords;
    result.newKeyword = newKeyword;

    // null check
    if (!isEmpty(data) && !isEmpty(keywords)) {
        if (!isEmpty(newKeyword)) {
            result.text = update.replace(data, keywords, newKeyword);
        } else {
            result.text = update.remove(data, keywords);
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

module.exports = router;
