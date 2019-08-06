// var questions = require("../data/questions.json")
var questionModel = require("../models/question/question.model.server")

function createQuestion(newQuesiton) {
    // const data = questions.find(quesiton => quesiton._id == newQuesiton._id)
    // if (data == undefined) {
    //     questions.push(newQuesiton);
    //     return questions
    // }
    // return null;
    return questionModel.create(newQuesiton);

}

function findAllQuestions() {
    return questionModel.find();
}

function findQuestionById(qid) {
    return questionModel.findById(qid)
}


function updateQuestion(qid, updateQuesiton) {
    return questionModel.update({_id: qid}, {
        $set: updateQuesiton // fields existed will be updated, if not keep the same
    })
}

function deleteQuestion(qid) {
    return questionModel.deleteOne({_id: qid})
}


module.exports = {
    createQuestion, findAllQuestions,
    findQuestionById, updateQuestion,
    deleteQuestion
}
