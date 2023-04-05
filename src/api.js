const express = require('express');
const serverless = require('serverless-http');
const analyze = require('./routes/analyze');
const update = require('./routes/update');
const notAllowed = require('./routes/notAllowed');
const search = require('./routes/search');

const app = new express();

const router = express.Router();

// parsing json in put/post requests
app.use(express.json());

app.use('/.netlify/functions/api/analyze', analyze);
app.use('/.netlify/functions/api/update', update);
app.use('/.netlify/functions/api/search', search);
app.use('/*', notAllowed);

module.exports = app;
module.exports.handler = serverless(app);
