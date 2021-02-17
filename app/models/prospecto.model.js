module.exports = (sequelize, Sequelize) => {
    const Prospecto = sequelize.define("Prospectos", {
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
      evaluacionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'evaluacions',
          key: 'id'
        }
      },
      estatusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'estatuses',
          key: 'id'
        }
      }
  
    });
  
    return Prospecto;
  };
