const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo there! yes it works dsds");
});

app.listen(5000, (req, res) => {
  console.log("listening on port 5000...");
});
