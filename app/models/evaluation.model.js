module.exports = (sequelize, Sequelize) => {
    const Evaluacion = sequelize.define("evaluation", {
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Evaluacion;
  };
  