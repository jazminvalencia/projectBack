const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.evaluaciones = require("./evaluacion.model.js")(sequelize, Sequelize);
db.documentos = require("./documento.model.js")(sequelize, Sequelize);
db.estatus = require("./estatus.model.js")(sequelize, Sequelize);
db.prospectos = require("./prospecto.model.js")(sequelize, Sequelize);

module.exports = db;
