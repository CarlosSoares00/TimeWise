const { Tarefa } = require('../../database/models')
const Joi = require("joi")


const validateTaskInput = (data) => {
  const schema = Joi.object({
    titulo: Joi.string().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('Completo', 'Incompleto').required()
  })
  return schema.validate(data)
} 

const TaskController = {
  createTask: async (req, res) => {
    try {
      const projectId = req.params.idProject
      console.log(projectId)

      const { error } = validateTaskInput(req.body)
      if(error){
        return res.status(400).json({ error: error.details[0].message })
      }

      const taksExist = await Tarefa.findOne({ where: {titulo: req.body.titulo.trim()}})
      if(taksExist) { return res.status(409).json({ message: 'Titulo invalido ou existente.'})}

      const newTask =  await Tarefa.create({
        idProjeto: projectId,
        ...req.body
      })

      return res.status(201).json({ message: 'Tarefa criada com sucesso', newTask });

    } catch (error) {
      console.error(error)
       return res.status(500).json({ error: "Erro interno do servidor."})
    }
  },
  getAllTasksByProject: async (req, res) =>  {
    try {
      const projectId = req.params.idProject
      
      const tasks = await Tarefa.findAll( { where: { idProjeto: projectId } })
      if(!tasks) {
        return res.status(404).json({ message: "A Tarefa do Projecto não foi encontrada." })
      }
      return res.status(200).json(tasks)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Erro interno do servidor."})
    }
  },
  getTaskById: async (req, res) =>  {
    try {
      const taskId = req.params.idTask
      
      const task = await Tarefa.findByPk(taskId)
      if(!task){ return res.status(404).json({message: "Tarefa não encontrada."})}

      return res.status(200).json(task)
    } catch (error) {
      console.error(error)  
      return res.status(500).json({error: "Erro interno do servidor"})
    }
  },
  editTask: async (req, res) =>  {
    try {
      const taskId = req.params.idTask;
      const { titulo, descricao, status } = req.body;

      // Validação dos dados de entrada
      const { error } = validateTaskInput(req.body)
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      } 

      // Atualização da tarefa
      const [rowsUpdated, [updatedTask]] = await Tarefa.update({
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        status
      }, {
        where: { id: taskId },
        returning: true
      });

      if (rowsUpdated === 0) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      return res.status(200).json(updatedTask);
    
    } catch (error) {
      console.error(error) 
      return res.status(500).json({error: "Erro intenro do servidor."})
    }
  },
  deleteTask: async (req, res) =>  {
    try {
      const taskId = req.params.idTask;
      const task = await Tarefa.findByPk(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      await Tarefa.destroy({ where: { id: taskId } });
      return res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = TaskController