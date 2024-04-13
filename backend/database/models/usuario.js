'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Projeto, { foreignKey: 'idUsuario', as: 'projetos' });
      this.hasMany(models.Relatorio, { foreignKey: 'idUsuario', as: 'relatorios' });
      this.belongsToMany(models.Desafio, { through: 'ParticipacaoDesafio', foreignKey: 'idUsuario', as: 'desafios' });
    }
    
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    dataUltimaAtualizacao: DataTypes.DATE,
    tipoAssinatura: DataTypes.STRING,
    dataExpiracaoAssinatura: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};