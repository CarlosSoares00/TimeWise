// Nomes das variaveis locais são escritas em Ingles, e coisas do banco de dados em portugues
const { Projeto } = require('../../database/models');
const Joi = require("Joi");


const validateProjectInput = (data) => {
  const schema = Joi.object({
    titulo: Joi.string().trim().required(),
    categoria: Joi.string().trim().required(),
    descricao: Joi.string().trim().required(),
    status: Joi.string().valid('Completo', 'InCompleto').required(),
    totalPomodoro: Joi.number().required()
  });
  return schema.validate(data);
};

const ProjectControllers = {
  createProject: async (req, res) => {
    try {
      const userId = req.user.userId

      const { error } = validateProjectInput(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }

      const projectExist = await Projeto.findOne({ where: {titulo: req.body.titulo.trim()}})
      if(projectExist) { return res.status(409).json({ message: 'Titulo invalido ou existente.'})}

      const newProject = await Projeto.create({
        idUsuario: userId,
        ...req.body
      })

      return res.status(200).json({ message: "Projecto criado com sucesso", newProject})

    } catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Erro interno do servidor'})
    }
  },
  getProjects: async (req, res) => {
    try {
      const userId = req.user.userId
      const projectAll = await Projeto.findAll({ where: { idUsuario: userId } })
      return res.status(200).json(projectAll)
      
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do servidor."})
    }
  },
  getProjectosStatus: async (req, res) => {
    try {
      const userId = req.user.userId
      const { status } = req.body

      if (!['Completo', 'InCompleto'].includes(status)) {
        return res.status(404).json({ error: "Por favor, escolha uma opção válida." });
      }

      const projectsByStatus = await Projeto.findAll({ where: {
          idUsuario: userId,
          status: status
      }})
        
      return res.status(200).json(projectsByStatus)
    } catch (error) {
      console.error(error)
      return res.status(500).json({error: "Erro interno do Servidor"})
    }
  },
  editProject: async (req, res) => {
    try {
      const idProject = req.params.idProject
      const project = await Projeto.findByPk(idProject)
      if(!project) return res.status(404).json({error: 'Projecto não encontrado'})
      
      const { error } = validateProjectInput(req.body)
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
      if(!project)return res.status(404).json({error: "O projecto não foi encontrado"})

      await Projeto.destroy({ where: { id: idProject }})
      return res.status(404).json({message: "Projecto eliminado com sucesso."})
    } catch (error) {
      console.error(error)
      return res.status(500).json({Error: "interno do servidor."})
    }
  }
}


module.exports = ProjectControllers