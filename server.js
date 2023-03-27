const express = require('express');
const analyze = require('./routes/analyze');

const app = new express();

// parsing json in put/post requests
app.use(express.json());

app.use('/analyze', analyze);

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('app is started on:', PORT);
});