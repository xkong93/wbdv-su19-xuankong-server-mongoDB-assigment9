var mongoose = require('mongoose');
var questionSchema = require('../question/question.schema.server')

var questionModel =
        mongoose.model(
            'QuestionModel',
            questionSchema
        );

module.exports = questionModel;
