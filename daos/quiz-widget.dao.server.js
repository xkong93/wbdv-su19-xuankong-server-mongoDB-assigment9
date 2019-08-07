var quizWidgetModel = require("../data/models/quiz-widget/quiz-widget.model.server")

function createQuizWidget(newQuizWidget) {
    return quizWidgetModel.create(newQuizWidget);
}

function addQuestionToQuizWidget(qid,qwid){
        quizWidgetModel.update({_id: qwid},{
            $addToSet: {questions: qid}
        })
}
function findAllQuizWidgets() {
    return quizWidgetModel.find();
}

function findWidgetsById(qwid) {
    return quizWidgetModel.findById(qwid)
}


function updateQuizWidget(qwid, updateWidgetList) {
    return quizWidgetModel.update({_id: qwid}, {
        $set: updateWidgetList // fields existed will be updated, if not keep the same
    })
}

function deleteQuizWidget(qwid) {
    return quizWidgetModel.deleteOne({_id: qwid})
}

module.exports = {
    createQuizWidget, findAllQuizWidgets,
    addQuestionToQuizWidget, updateQuizWidget,
    deleteQuizWidget
}
