var studentModel = require('../models/student/student.model.server');
var questionModel = require("../models/question/question.model.server")
var answerModel = require('../models/answer/answer.model.server')


function populateDatabase(students, questions, answers) {
    return studentModel.insertMany(students)
        .then(() => questionModel.insertMany(questions))
        .then(() => answerModel.insertMany(answers))
}


function truncateDatabase(students, questions, answers) {
    return  studentModel.remove({})
        .then(() => questionModel.remove({}))
        .then(() => answerModel.remove({}))

    //either way
    // return answerModel.deleteMany({})
    //     .then(() => questionModel.deleteMany({}))
    //     .then(() => studentModel.deleteMany({}))
}


module.exports = {
    populateDatabase, truncateDatabase,
}


