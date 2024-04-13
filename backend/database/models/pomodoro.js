'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pomodoro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tarefa, { foreignKey: 'idTarefa', as: 'tarefa' });
    }
  }
  Pomodoro.init({
    idTarefa: DataTypes.INTEGER,
    dataHoraInicio: DataTypes.DATE,
    dataHoraFim: DataTypes.DATE,
    tipo: DataTypes.STRING,
    notas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pomodoro',
  });
  return Pomodoro;
};