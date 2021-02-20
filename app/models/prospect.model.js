module.exports = (sequelize, Sequelize) => {
    const Prospecto = sequelize.define("prospect", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      primerApellido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      segundoApellido: {
        type: Sequelize.STRING
      },
      calle:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      colonia:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cp:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      rfc:{
        type: Sequelize.STRING,
        allowNull: false,
       },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'statuses',
          key: 'id'
        }
      },
      evaluationsId: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'evaluations',
          key: 'id'
        }
      },
      descripcionRechazo:{
        type: Sequelize.STRING
      }
    });
  
    return Prospecto;
  };
