'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recompensa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UsuarioRecompensa, { foreignKey: 'idRecompensa', as: 'usuariosRecompensas' });
    }
  }
  Recompensa.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    pontosNecessarios: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recompensa',
  });
  return Recompensa;
};