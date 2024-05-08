const express = require('express')
const app = express()
app.use(express.json())

app.get('/', function (req, res) {
  console.log("heyy!");
  res.json({message:'Hello '+ req.query.name+' from IP: '+req.ip})
})

app.post('/intro', function (req, res) {
  console.log(req.query)
  console.log(req.body)
  res.json({message:'Request hit the POST endpoint successfully',data:req.body});
});

app.listen(3000, function () {console.log('App listening on port 3000')});