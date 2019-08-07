// const mongoose = require('mongoose')
// const questionSchema = require('../models/question.schema.server.js')
// const questionModel = mongoose.model('QuestionModel', questionSchema)

var questionsDao = require('../daos/question.dao.server')

module.exports = function (app) {

    function createQuestion(req, res) {
        const question = req.body;
        questionsDao.createQuestion(question)
            .then(res => questionsDao.findAllQuestions())
            .then(response => res.send(response))

    }

    function findAllQuestions(req, res) {
        questionsDao.findAllQuestions()
            .then(response => res.send(response));
    }

    function findQuestionById(req, res) {
       var pid = req.params['qid']
        questionsDao.findQuestionById(pid)
            .then(response => res.send(response))
    }

    function updateQuestion(req, res) {
        var questionId = req.params['qid'];
        var questionUpdates = req.body
        questionsDao.updateQuestion(questionId, questionUpdates)
            .then(response => res.send(response))
    }

    function deleteQuestion(req, res) {
        var questionId = req.params['qid'];
        questionsDao.deleteQuestion(questionId)
            .then(response => res.send(response))
    }

    app.post('/api/question', createQuestion)
    app.get('/api/question', findAllQuestions)
    app.get('/api/question/:qid', findQuestionById)
    app.put('/api/question/:qid', updateQuestion)
    app.delete('/api/question/:qid', deleteQuestion)
}
