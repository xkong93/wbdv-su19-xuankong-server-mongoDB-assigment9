module.exports = function () {
    const mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost:27017/whiteboard-su19', {useNewUrlParser: true});
    var username = process.env.MY_MONGODB_USERNAME;
    var password = process.env.MY_MONGODB_PASSWORD;
    mongoose.connect('mongodb://'+username+':'+password+'@ds261077.mlab.com:61077/heroku_h2s9fzj5', {useNewUrlParser: true});
}
