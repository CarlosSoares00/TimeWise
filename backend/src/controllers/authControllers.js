const { Usuario } = require('../../database/models');

const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Joi = require("Joi");

const secretJwt = "carlossoares2004@"

const AuthController = {
  register: async(req, res) => {
    try {
      // Buscando os dados da requisicao
      const {nome, email, senha, confirmarSenha } = req.body

      // Verificando se o email já existe ou não
      const userExist = await Usuario.findOne({ where: { email } })
      if(userExist){
        return res
            .status(409)
            .json({ message: "Esse emial já possui uma conta verificada."})
      }

      // Regra que os campos de entrada dos dados devem seguir
      const schema = Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string()
        .min(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
        .required(),
        confirmarSenha: Joi.string()
        .min(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
        .required(),
      })
      const { error } = schema.validate(req.body)
      if(error) {
        return res.status(409).json({ error: error.details[0].message })
      }

      // Verificando se a senha é igual ao confirmarSenha
      if(senha != confirmarSenha) {
        return res.status(400).json({ error: "As senhas dem ser iguais. "})
      }

      //Criando uma Hash para criptar a senha do Usuario
      const passwordHash = await bcrypt.hash(senha, 10)

      //Utilizando o Sequelize para criar um novo usuario
      const newUser = await Usuario.create({
        id: uuidv4(),
        nome,
        email,
        senha: passwordHash
      })

      // Returna um estado 201 com uma mensaguem e os dados do usuario criado
      return res
      .status(201)
      .json({ message: 'Usuário criando com sucesso', newUser })

      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Erro interno do servidor' })
      }
    },
  login: async (req, res) => {
    try {
      const { email, senha } = req.body

      if(!email || !senha) {
        return res
        .status(400)
        .json({error: "Por favor preencha todos os campos."})
      }

      const user = await Usuario.findOne({ where: { email } })
      if(!email) {
        return res.status(404).json({error: " Crêdenciais Invalidas." })
      }

      const passwordMath = await bcrypt.compare(senha, user.senha)
      if(!passwordMath){
        return res.status(404).json({ error:"Credênciais Invalidas." })
      }

      const token = jwt.sign( {userId: user.id}, secretJwt)
      res.setHeader('Authorization', `Bearer ${token}`)

      return res.status(200).json({ message: "Login realizado com sucesso!", token })

    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro interno do servidor"})
    }
  }
}

module.exports = AuthController


