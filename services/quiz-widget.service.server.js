var quizWidgetDao = require('../daos/quiz-widget.dao.server')

module.exports = function (app) {

    function createQuizWidget(req, res) {
        const quizWidget = req.body;
        quizWidgetDao.createQuizWidget(quizWidget)
            .then(response => res.send(response))

    }

    function addQuestionToQuizWidget(req, res) {
        var qwid = req.params['qwid']
        var qid = req.params['qid']
        quizWidgetDao.addQuestionToQuizWidget(qid,qwid)
            .then(response => res.send(response))
    }

    function findAllQuizWidgets(req, res) {
        quizWidgetDao.findAllQuizWidgets()
            .then(response => res.send(response));
    }

    function findQuizWidgetById(req, res) {
        var qwid = req.params['qwid']
        quizWidgetDao.findQuizWidgetById(qwid)
            .then(response => res.send(response))
    }

    function updateQuizWidget(req, res) {
        var quizWidgetId = req.params['qwid'];
        var quizWidgetUpdates = req.body
        quizWidgetDao.updateQuizWidget(quizWidgetId, quizWidgetUpdates)
            .then(response => res.send(response))
    }

    function deleteQuizWidget(req, res) {
        var quizWidgetId = req.params['qwid'];
        quizWidgetDao.deleteQuizWidget(quizWidgetId)
            .then(response => res.send(response))
    }

    app.post('/api/quizWidget', createQuizWidget)
    app.get('/api/quizWidget', findAllQuizWidgets)
    app.get('/api/quizWidget/:qwid', findQuizWidgetById)
    app.get('/api/quizWidget/:qwid/question/:qid', addQuestionToQuizWidget)
    app.put('/api/quizWidget/:qwid', updateQuizWidget)
    app.delete('/api/quizWidget/:qwid', deleteQuizWidget)
}
