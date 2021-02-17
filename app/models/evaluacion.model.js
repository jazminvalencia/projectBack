module.exports = (sequelize, Sequelize) => {
    const Evaluacion = sequelize.define("evaluacion", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    return Evaluacion;
  };
  