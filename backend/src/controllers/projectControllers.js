const { Projeto } = require('../../database/models');

const Joi = require("Joi");


const ProjectControllers = {
  createProject: async (req, res) => {
    try {
      const userId = req.user.userId

      const { titulo, categoria, descricao, status, totalPomodoro } = req.body

      const schema = Joi.object({
          titulo: Joi.string().required(),
          categoria: Joi.string().required(),
          descricao: Joi.string().required(),
          status: Joi.string().required(),
          totalPomodoro: Joi.number().required()
      })
      const { error } = schema.validate(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }

      const projectExist = await Projeto.findOne({ where: {titulo}})
      if(projectExist) {
        return res.status(409).json({ message: 'Titulo invalido ou existente.'})
      }

      const newProject = await Projeto.create({
        idUsuario: userId,
        titulo,
        categoria,
        descricao,
        status,
        totalPomodoro
      })

      return res.status(200).json({ message: "Projecto criado com sucesso", newProject})

    } catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Erro interno do servidor'})
    }
  },
  getProjectos: async (req, res) => {
    try {

      const idUsuario = req.user.userId
      const projectAll = await Projeto.findAll({ where: { idUsuario } })
      return res.status(200).json(projectAll)
      
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  getProjectosStatus: async (req, res) => {
    try {
      const idUsuario = req.user.userId

      const { status } = req.body

      if (status !== "Completo" && status !== "InCompleto") {
        return res.status(404).json({erro: "Por favor escolha uma opcao valida."})
      }

        const projectCompleto = await Projeto.findAll({ where: {
          idUsuario,
          status: status
        }})
        
      return res.status(200).json(projectCompleto)
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do Servidor"})
    }
  },
  editProject: async (req, res) => {
    try {
      const idProject = req.params.idProject

      const project = await Projeto.findByPk(idProject)
      if(!project) {
        return res.status(404).json({error: 'Projecto não encontrado'})
      }

      const schema = Joi.object({
        titulo: Joi.string().required(),
        categoria: Joi.string().required(),
        descricao: Joi.string().required(),
        status: Joi.string().required(),
        totalPomodoro: Joi.number().required()
      })
      const { error } = schema.validate(req.body)
      if(error){
        return res.status(409).json({error: error.details[0].message})
      }

      const updateProject = await Projeto.update(req.body, {
        where: { id: idProject },
        returning: true
      });
      return res.status(200).json(updateProject)


    } catch (error) {
      console.error(error)
      return res.status(400).json({error: "Erro interno no servidor."})
    }
  },
            deleteProject: async (req, res) => {
    try {
      const idProject = req.params.idProject

      const project = await Projeto.findByPk(idProject)
      if(!project){
        return res.status(404).json({error: "O projecto não foi encontrado"})
      }

      await Projeto.destroy({where: {id: idProject}})
      return res.status(404).json({message: "Projecto eliminado com sucesso."})
    } catch (error) {
      console.error(error)
      return res.status(500).json({Error: "interno do servidor."})
    }
  }
}


module.exports = ProjectControllers