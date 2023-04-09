const express = require('express');
const serverless = require('serverless-http');
const analyze = require('./routes/analyze');
const update = require('./routes/update');
const notAllowed = require('./routes/notAllowed');
const search = require('./routes/search');

const app = new express();

// parsing json in put/post requests
app.use(express.json());

app.use('/.netlify/functions/api/analyze', analyze);
app.use('/.netlify/functions/api/update', update);
app.use('/.netlify/functions/api/search', search);
app.use('/.netlify/functions/api/*', notAllowed);

module.exports = app;
module.exports.handler = serverless(app);
