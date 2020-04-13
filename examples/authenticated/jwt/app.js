const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config.js");

const app = express();
const port = 8000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const loginDetails = req.body;
  // mock a check against the database
  let mockedUsername = "admin";
  let mockedPassword = "password";

  if (
    loginDetails &&
    loginDetails.username === mockedUsername &&
    loginDetails.password === mockedPassword
  ) {
    let token = jwt.sign({ username: loginDetails.username }, config.secret, {
      expiresIn: "24h" // expires in 24 hours
    });
    res.json({ bearerToken: token });
  } else {
    res.status(401).send(false);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
