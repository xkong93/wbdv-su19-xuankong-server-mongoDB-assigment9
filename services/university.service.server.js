var universityDao = require('../daos/university.dao.server')


module.exports = function (app) {

    function populateDatabase(req, res) {
        const data = req.body;
        var students = data.students;
        var questions = data.questions;
        var answers = data.answers;

        universityDao.populateDatabase(students, questions, answers)
            .then(() => res.send("success"))
    }

    function truncateDatabase(req, res) {
        const data = req.body;
        var students = data.students;
        var questions = data.questions;
        var answers = data.answers;
        universityDao.truncateDatabase(students, questions, answers)
            .then(() => res.send("success"))
    }


    app.post("/api/populate", populateDatabase)
    app.delete("/api/all", truncateDatabase)

}
