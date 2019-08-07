const mongoose = require('mongoose')
// var studentSchema = require('../student/student.schema.server')
// var questionSchema = require('../question/question.schema.server')
module.exports = mongoose.Schema({
	_id: Number,
	trueFalseAnswer: Boolean,
	multipleChoiceAnswer: Number,
	student:  {type: Number, ref: 'StudentModel'},//composition aka join using populate()
	question: {type: Number, ref: 'QuestionModel'}
	// student: studentSchema,
	// question: questionSchema
}, {collection: 'answers'})
