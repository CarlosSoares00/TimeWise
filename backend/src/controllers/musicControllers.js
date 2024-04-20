const { Playlist, Musica } = require('../../database/models')
const path = require('path')
const Joi = require('joi')

const validatePlaylistInput = (data) => {
  const schema = Joi.object({
    titulo: Joi.string().max(30).required()
  })

  return schema.validate(data)
}

const musicController = {
  createPlaylist: async (req, res) => {
    try {
      const userId = req.user.userId

      const { error } = validatePlaylistInput(req.body)
      if(error) {
        return res.status(409).json({ error: error.details[0].message})
      }

      const newPlaylist = await Playlist.create({
        idUsuario: userId,
        ...req.body
      })

      return res.status(200).json({message: "Playlist criado com sucesso.", newPlaylist})

    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do Servidor."})
    }    
  },
  createMusic: async (req, res) => {
    try {
      const playlistId = req.params.playlistId
      const { titulo } = req.body

      if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo de música enviado.' });
      }

      const { originalname, filename, destination } = req.file

      const newSong = await Musica.create({
        playlistId,
        titulo: originalname,
        audioPath: path.join(destination, filename)
      })

      return res.status(200).json({message: "A musica foi adicionada na Playlist", newSong})

    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  getPlaylist: async (req, res) => {
    try {
      const userId = req.user.userId

      const playlist = await Playlist.findAll({ where: { idUsuario: userId }})
      if(!playlist){
        return res.status(404).json({error: "Playlist não encontrada."})
      }

      return res.status(200).json({message: "Lista com as Playlist:", playlist})
      
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  getPlaylistWithMusics: async (req, res) => {
    try {
      const userId = req.user.userId

      const playlistWithMusics = await Playlist.findAll({
        where: { idUsuario: userId }, // Aqui você está filtrando as playlists do usuário
        include: [{ model: Musica }]
      });
      if(!playlistWithMusics){
        return res.status(404).json({error: "Playlist nao encontrada"})
      }

      return res.status(200).json(playlistWithMusics)

    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  deletePlaylist: async (req, res) => {
    try {
      const playlistId = req.params.playlistId
      
      const  playlist = await Playlist.findByPk(playlistId)
      if(!playlist) return res.status(404).json({error: "A playlist não foi encontrada."})

      await Playlist.destroy({ where: { id: playlistId } })
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  deleteMusicPlaylist: async (req, res) => {
    try {
      const idMusica = req.params.idMusica
      
      const musica = await Playlist.findByPk(idMusica)
      if(!musica) return res.status(404).json({error: "A playlist não foi encontrada."})

      await Musica.destroy({ where: { id: idMusica } })
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  }
}

module.exports = musicController