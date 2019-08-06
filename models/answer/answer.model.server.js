var mongoose = require('mongoose');
var answerSchema = require('../answer/answer.schema.server')

var answerModel =
    mongoose.model(
        'AnswerModel',
        answerSchema);

module.exports = answerModel;
