// index.js

const express = require("express");

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const app = express();

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

app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
});
