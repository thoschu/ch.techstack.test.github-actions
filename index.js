// index.js

const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.set('trust proxy', true);

app.get("/", async (req, res) => {
  res.json({
    status: "OK",
    port : PORT,
    env: process.env.NAME
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
