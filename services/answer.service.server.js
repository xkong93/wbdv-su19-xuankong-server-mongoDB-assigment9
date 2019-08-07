// const mongoose = require('mongoose')
// const answerSchema = require('../models/answer.schema.server.js')
// const answerModel = mongoose.model('AnswerModel', answerSchema)

var answersDao = require('../daos/answer.dao.server.js')

module.exports = function (app) {

    function studentAnswersQuestion(req, res) {
        const answer = req.body;

        answersDao.answerQuestion(answer)
            .then(response => res.send(response))
    }

    function findAllAnswers(req, res) {
        answersDao.findAllAnswers()
            .then(response => res.send(response))
    }

    function findAnswerById(req, res) {
        const aid = req.params.aid;
        answersDao.findAnswerById(aid)
            .then(response => res.send(response))
    }

    function findAnswersByQuestionId(req, res) {
        const qid = req.params.qid;
        answersDao.findAnswersByQuestionId(qid)
            .then(response => res.send(response))

    }

    function findAnswersByStudentId(req, res) {
        const sid = req.params.sid;
        answersDao.findAnswersByStudentId(sid)
            .then(response => res.send(response))

    }

    function findAnswersbyStudentForQuestion(req, res){
        // const sid = req.params['sid']; alternative way
        // const qid = req.params['qid'];
        const sid = req.params.sid;
        const qid = req.params.qid;
        answersDao.findAnswersbyStudentForQuestion(sid,qid)
            .then(response => res.send(response))

    }

    app.post('/api/student/:sid/question/:qid/answer', studentAnswersQuestion)
    app.get('/api/answer', findAllAnswers)
    app.get('/api/answer/:aid', findAnswerById)
    app.get('/api/question/:qid/answer', findAnswersByQuestionId)
    app.get('/api/student/:sid/answer', findAnswersByStudentId)
    app.get('/api/student/:sid/question/:qid/answer', findAnswersbyStudentForQuestion)
    app.get('/api/question/:qid/student/:sid/answer', findAnswersbyStudentForQuestion)
}
