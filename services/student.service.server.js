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
		res.json(studentDao.findStudentById(studentId));
	}

	function findStudentByUsername(req, res) {
		var username = req.params['username'];

		res.json(studentDao.findStudentByUsername(username))
	}

	function updateStudent(req, res) {
		var studentId = req.params['sid'];
		var studentUpdates = req.body
		res.json(studentDao.updateStudent(studentId, studentUpdates))

	}

	function deleteStudent(req, res) {
		var studentId = req.params['sid'];
		res.json(studentDao.deleteStudent(studentId))
	}

	function test(req,res){
		res.send("hello world!");
	}
	app.post('/api/student', createStudent);
	app.get('/api/student', findAllStudents);
	app.get('/api/student/:sid', findStudentById);
	app.get('/api/student/username/:username', findStudentByUsername);
	app.put('/api/student/:sid', updateStudent);
	app.delete('/api/student/:sid', deleteStudent);
	app.get('',test)
}
