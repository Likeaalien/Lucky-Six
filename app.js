const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/howtoplay', (req, res) => {
//     res.sendFile(path.join(__dirname + '/howtoplay.html'));
// });

app.listen(6969);