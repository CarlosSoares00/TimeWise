'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRecompensa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
       this.belongsTo(models.Recompensa, { foreignKey: 'idRecompensa', as: 'recompensa' });
    }
  }
  UsuarioRecompensa.init({
    idUsuario: DataTypes.INTEGER,
    idRecompensa: DataTypes.INTEGER,
    dataConquista: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UsuarioRecompensa',
  });
  return UsuarioRecompensa;
};