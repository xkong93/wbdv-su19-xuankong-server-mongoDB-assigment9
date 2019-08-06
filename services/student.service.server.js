var studentDao = require('../daos/student.dao.server.js');

module.exports = function (app) {

    function createStudent(req, res) {
        console.log('createStudent')
        var student = req.body
        console.log(student)
        studentDao
            .createStudent(student)
            .then(response => res.send(response))
    }

    function findAllStudents(req, res) {
        studentDao.findAllStudents()
            .then(students => res.send(students))
    }

    function findStudentById(req, res) {
        var studentId = req.params['sid'];
        studentDao.findStudentById(studentId)
            .then(student => res.send(student))
    }

    function findStudentByUsername(req, res) {
        var username = req.params['username'];
        studentDao.findStudentByUsername(username)
            .then(student => res.send(student))
    }

    function updateStudent(req, res) {
        var studentId = req.params['sid'];
        var studentUpdates = req.body
        studentDao.updateStudent(studentId, studentUpdates)
            .then(student => res.send(student));
    }

    function deleteStudent(req, res) {
        var studentId = req.params['sid'];
        studentDao.deleteStudent(studentId)
            .then(student => res.send(student));
    }

    app.post('/api/student', createStudent);
    app.get('/api/student', findAllStudents);
    app.get('/api/student/:sid', findStudentById);
    app.get('/api/student/username/:username', findStudentByUsername);
    app.put('/api/student/:sid', updateStudent);
    app.delete('/api/student/:sid', deleteStudent);
}
