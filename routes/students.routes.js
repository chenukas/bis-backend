const router = require('express').Router();
const studentController = require('../controllers/students.controllers')

// define routes here
router.get('/students/admissionNumber', studentController.getNextAdmissionNumber);
router.post('/students', studentController.enrollStudent);
router.get('/students', studentController.viewStudents);
router.put('/students/:id', studentController.updateStudent);
// router.delete('/student/:id', studentController.deleteStudentById);

module.exports = router;