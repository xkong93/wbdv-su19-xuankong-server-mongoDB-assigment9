var mongoose = require('mongoose')
var quizWidgetSchema = require('../quiz-widget/quiz-widget.schema.server')

var quizWidgetModel = mongoose.model(
    'quizWidgetModel',
    quizWidgetSchema
);


module.exports = quizWidgetModel;
