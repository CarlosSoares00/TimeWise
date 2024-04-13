'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pomodoros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTarefa: {
        type: Sequelize.INTEGER
      },
      dataHoraInicio: {
        type: Sequelize.DATE
      },
      dataHoraFim: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.STRING
      },
      notas: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pomodoros');
  }
};