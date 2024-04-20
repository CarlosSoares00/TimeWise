const express = require('express')
const router = express.Router()

const musicController = require('../controllers/musicControllers')
const verifyToken = require('../middlewares/authMiddleware')
const upload = require("../middlewares/uploadMusicMiddlewares")


router.post('/user/playlist/create', verifyToken,musicController.createPlaylist)
router.get('/user/playlist/', verifyToken, musicController.getPlaylist)
router.get('/user/playlist/musics', verifyToken, musicController.getPlaylistWithMusics)
router.delete('/user/playlist/:playlistid/delete', verifyToken, musicController.deletePlaylist)
router.post('/user/playlist/music/:playlistId/delete', verifyToken, musicController.deleteMusicPlaylist)


router.post('/user/playlist/:playlistId/addMusic', verifyToken, upload.single('music') , musicController.createMusic)



module.exports = router