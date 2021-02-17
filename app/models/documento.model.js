module.exports = (sequelize, Sequelize) => {
  const Documento = sequelize.define("documento", {
    documento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prospectoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { 
        model: 'Prospectos',
        key: 'id'
      }
    }
  });

  return Documento;
};
