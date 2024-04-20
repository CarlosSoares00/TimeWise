const express = require('express')
const router = express.Router() 

const taskController = require('../controllers/taskController')
const verifyToken = require('../middlewares/authMiddleware')

router.post('/user/project/:idProject/task/create', verifyToken, taskController.createTask);
router.get('/user/project/:idProject/task/getAll', verifyToken, taskController.getAllTasksByProject);
router.get('/user/project/:idProject/task/:idTask', verifyToken, taskController.getTaskById);
router.put('/user/project/:idProject/task/:idTask', verifyToken, taskController.editTask);
router.delete('/user/project/:idProject/task/:idTask', verifyToken, taskController.deleteTask);

module.exports = router