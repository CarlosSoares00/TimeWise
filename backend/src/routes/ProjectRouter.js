const express = require('express')
const router = express.Router()

const verifyToken = require('../middlewares/authMiddleware')
const projectControllers = require('../controllers/projectControllers')

router.post('/user/project/create', verifyToken, projectControllers.createProject)
router.get('/user/project/getAll', verifyToken, projectControllers.getProjectos)
router.post('/user/project/getCompleted', verifyToken, projectControllers.getProjectosStatus)
router.put('/user/project/:idProject', verifyToken, projectControllers.editProject)
router.delete('/user/project/:idProject', verifyToken, projectControllers.deleteProject)


module.exports = router