const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("heyy!");
  res.send('Hello World')
})

app.listen(3000, function () {console.log('App listening on port 3000')});