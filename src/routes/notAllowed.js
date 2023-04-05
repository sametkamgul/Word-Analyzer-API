const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
    let result = {
        status: 'error',
        message: 'method is not allowed',
        detail: {
            method: req.method,
            body: req.body,
        },
    };
    let statusCode = 405;

    res.status(statusCode).json(result);
});

module.exports = router;
