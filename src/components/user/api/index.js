const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('localhost:8080/#/barangay-indigency', (req, res) => {
  res.json(console.log("this is working" + ' ' + req));
});