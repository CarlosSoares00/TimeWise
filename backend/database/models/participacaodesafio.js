'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParticipacaoDesafio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ParticipacaoDesafio.init({
    idDesafio: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    dataConclusao: DataTypes.DATE,
    pontosGanhos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ParticipacaoDesafio',
  });
  return ParticipacaoDesafio;
};