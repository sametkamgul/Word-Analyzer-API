const express = require('express');
const analyzer = require('../lib/analyzer');

const router = express.Router();

router.get('/', async (req, res) => {
    let result = {};

    console.log('/analyze is requested');

    const data = req.query.text;
    const searchKeyword = req.query.searchKeyword;

    if (data !== null && data !== undefined && data !== '') {
        result = await analyzer.analyze(data, searchKeyword);

        res.json(result);

        return;
    }

    res.json({ status: 'error', message: 'text query parameter is missing!' });
});

module.exports = router;
