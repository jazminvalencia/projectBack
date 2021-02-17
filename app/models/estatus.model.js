module.exports = (sequelize, Sequelize) => {
    const Estatus = sequelize.define("estatus", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    return Estatus;
  };
  