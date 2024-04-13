'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relatorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
      this.belongsToMany(models.Tarefa, { through: 'TarefaRelatorio', foreignKey: 'idRelatorio', as: 'tarefas' });
    }
  }
  Relatorio.init({
    idUsuario: DataTypes.INTEGER,
    periodo: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    tempoTotalTrabalho: DataTypes.INTEGER,
    tempoTotalPausa: DataTypes.INTEGER,
    tarefasConcluidas: DataTypes.INTEGER,
    projetosConcluidos: DataTypes.INTEGER,
    pontosGanhos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Relatorio',
  });
  return Relatorio;
};