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

db.evaluaciones = require("./evaluation.model.js")(sequelize, Sequelize);
db.documentos = require("./document.model.js")(sequelize, Sequelize);
db.estatus = require("./status.model.js")(sequelize, Sequelize);
db.prospectos = require("./prospect.model.js")(sequelize, Sequelize);


db.prospectos.belongsTo(db.estatus);
db.estatus.hasMany(db.prospectos);

db.prospectos.belongsTo(db.evaluaciones);
db.evaluaciones.hasMany(db.prospectos);

db.documentos.belongsTo(db.prospectos);
db.prospectos.hasMany(db.documentos);

module.exports = db;
