var express = require('express')
var app = express()

// var username = process.env.MY_MONGODB_USERNAME;
// var password = process.env.MY_MONGODB_PASSWORD;
// mongoose.connect('mongodb://'+username+':'+password+'@localhost:27017/wbdv-su19', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost:27017/whiteboard-su19', {useNewUrlParser: true});


require("./data/db")();//key point

// Configure parsing JSON from body

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure CORS
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin",
       "http://localhost:4200");
   res.header("Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
       "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});


var studentService = require('./services/student.service.server.js')(app);
const questionService = require('./services/question.service.server.js')(app);
const answerService = require('./services/answer.service.server.js')(app);
console.log("server started")

app.listen(process.env.PORT || 3000)
