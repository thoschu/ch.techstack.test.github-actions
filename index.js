// index.js

const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static(`${__dirname}/public`));
app.set('trust proxy', true);

app.get("/", async (req, res) => {
  res.json({
    status: "OK",
    port : PORT,
    env: process.env.NAME || null
  });
});

app.get('/hw', (req, res) => {
  res.send('Hello World');
});

app.get('/products/:id', cors(), (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
});
