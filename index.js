// alert("Hello, World!");
const express = require('express');
const path  = require('path');
const app = express();
const APP_PORT = 3003;
const PORT = process.env.PORT || APP_PORT;

app.use('/', express.static(__dirname + '/dist/github-actions/'));

app.get('/hw', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
