// var students = require('../data/students.json');
var studentModel = require('../models/student/student.model.server');

function createStudent(newStudent) {
    return studentModel.create(newStudent)
}

function findAllStudents() {
    // retrieve all student docs
    // equivalent to select * from students -- no where clause
    return studentModel.find();
}

function findStudentById(studentId) {
    // studentModel.find({_id: userId})
    // equivalent select * from students where _id=studentId
    return studentModel.findById(studentId)//syntactic sugar
}

function findStudentByUsername(username) {
    return studentModel.findOne({username: username})

}

function updateStudent(studentId, studentUpdates) {
   return studentModel.update({_id:studentId},{
       $set: studentUpdates // fields existed will be updated, if not keep the same
   })
}

function deleteStudent(studentId) {
    return studentModel.deleteOne({_id:studentId})

}

module.exports = {
    createStudent, findAllStudents, findStudentById,
    findStudentByUsername, updateStudent, deleteStudent
};
