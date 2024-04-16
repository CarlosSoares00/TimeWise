const express = require('express')
const router = express.Router()

const verifyToken = require('../middlewares/authMiddleware')
const projectController = require('../controllers/projectControllers')

router.post('/user/project/create', verifyToken, projectController.createProject)
router.get('/user/project/getAll', verifyToken, projectController.getProjects)
router.post('/user/project/getCompleted', verifyToken, projectController.getProjectosStatus)
router.put('/user/project/:idProject', verifyToken, projectController.editProject)
router.delete('/user/project/:idProject', verifyToken, projectController.deleteProject)


module.exports = router