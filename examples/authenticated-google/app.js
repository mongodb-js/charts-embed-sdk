const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(cors());
app.use(bodyParser.json());
const port = 1234

//app.get('/', (req, res) => res.send('Hello World!'))
let googleToken;
app.post('/api/sendGoogleId', async (req, res) => {
  console.log("Got token")
  googleToken = req.body.token;
  
  res.send();
});

app.get('/api/getGoogleId', async (req, res) => {
  console.log("We about to send" + googleToken);
  res.send(googleToken);
  googleToken = ''; // Don't store Google ID
})

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))