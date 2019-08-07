// var answers = require('../data/answers.json');
var answerModel = require('../models/answer/answer.model.server')

function answerQuestion(newAnswer) {
    // const data = answers.find(answer => answer._id == newAnswer._id)
    // if (data == undefined) {
    //     answers.push(newAnswer)
    //     return answers
    // }
    // return null;
    return answerModel.create(newAnswer)

}

function findAllAnswers() { //key point
    return answerModel.find()
        // .populate('student')
        // .populate('question')
        // .exec()
}

function findAnswerById(answerId) {
    return answerModel.findById(answerId);
}

function findAnswersByQuestionId(questionId) {
    return answerModel.find({question: questionId});
}

function findAnswersByStudentId(studentId) {
    return answerModel.find({student: studentId});
}

function findAnswersbyStudentForQuestion(studentId, questionId) {
    return answerModel.find({student: studentId,question: questionId})
}

module.exports = {
    answerQuestion, findAllAnswers,
    findAnswerById, findAnswersByQuestionId,
    findAnswersByStudentId, findAnswersbyStudentForQuestion
}



