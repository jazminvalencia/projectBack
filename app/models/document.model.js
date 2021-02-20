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
    prospectoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { 
        model: 'prospect',
        key: 'id'
      }
    }
  });

  return Documento;
};
