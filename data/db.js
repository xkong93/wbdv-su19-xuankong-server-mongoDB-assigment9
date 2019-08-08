module.exports = function () {
    const mongoose = require('mongoose');

    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_USERNAME_WEBDEV;
    mongoose.connect('mongodb://' + username + ':' + password + '@ds261077.mlab.com:61077/heroku_h2s9fzj5', {useNewUrlParser: true});
}
}
