const express = require("express");
const path = require("path");

var port = 3000
var  indexRoute = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);

app.listen(process.env.PORT || port);
console.log(`Listening on http://localhost:${port}`);