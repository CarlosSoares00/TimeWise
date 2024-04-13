'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desafio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Usuario, { through: 'ParticipacaoDesafio', foreignKey: 'idDesafio', as: 'participantes' });
    }
  }
  Desafio.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    pontosRecompensa: DataTypes.INTEGER,
    regras: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Desafio',
  });
  return Desafio;
};