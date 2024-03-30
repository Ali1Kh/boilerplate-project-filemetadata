var express = require('express');
var cors = require('cors');
var uploadFiles = require("./multer.js")


require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", uploadFiles().single("upfile"), function (req, res) {
  console.log(req.file);
  let { originalname, mimetype, size } = req.file;
  return res.json({ name: originalname, type: mimetype, size });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
