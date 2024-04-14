'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Projeto, { foreignKey: 'idProjeto', as: 'projeto' });
      this.hasMany(models.Pomodoro, { foreignKey: 'idTarefa', as: 'pomodoros' });
      this.belongsToMany(models.Relatorio, { through: 'TarefaRelatorio', foreignKey: 'idTarefa', as: 'relatorios' });
    }
  }
  Tarefa.init({
    idProjeto: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tempoEstimado: DataTypes.INTEGER,
    pontos: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarefa',
  });
  return Tarefa;
};