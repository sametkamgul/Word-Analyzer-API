const express = require('express');
const analyze = require('./routes/analyze');
const update = require('./routes/update');
const notAllowed = require('./routes/notAllowed');
const search = require('./routes/search');

const app = new express();

// parsing json in put/post requests
app.use(express.json());

app.use('/analyze', analyze);
app.use('/update', update);
app.use('/search', search);
app.use('/*', notAllowed);

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('app is started on:', PORT);
});
