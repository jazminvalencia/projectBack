module.exports = (sequelize, Sequelize) => {
    const Estatus = sequelize.define("status", {
      tipoEstatus: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    return Estatus;
  };
  