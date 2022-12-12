const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = fs.readFileSync(__dirname + "/public/leap.min.js", {
    encoding: "utf8",
  });
  // console.log("====data====", data);
  res.setHeader("Content-Type", "application/javascript");
  res.setHeader("X-Content-Type-Options", "nosniff=true");
  res.send(data);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
