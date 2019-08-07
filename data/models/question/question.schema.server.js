const mongoose = require('mongoose')
const TrueFalseSchema = require('./true-false.schema.server')
const MultipleChoiceSchema = require('./multiple-choice.schema.server.js')
module.exports = mongoose.Schema({
 _id: Number,
 question: String,
 points: Number,
 questionType: {
 	type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE"]
 },
 multipleChoice: MultipleChoiceSchema, // one to one
 trueFalse: TrueFalseSchema
}, {collection: 'questions'})
