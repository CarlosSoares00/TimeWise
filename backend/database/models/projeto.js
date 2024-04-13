'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
      this.hasMany(models.Tarefa, { foreignKey: 'idProjeto', as: 'tarefas' });
    }
  }
  Projeto.init({
    idUsuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    dataUltimaAtualizacao: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projeto',
  });
  return Projeto;
};