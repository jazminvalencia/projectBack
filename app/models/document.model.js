module.exports = (sequelize, Sequelize) => {
  const Documento = sequelize.define("document", {
    nombredoc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    documento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prospectId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { 
        model: 'prospects',
        key: 'id'
      }
    }
  });

  return Documento;
};
