const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.selected_candidate = require('../models/selected_candi.model')(sequelize, Sequelize);
db.candidate = require('../models/candidate.model')(sequelize, Sequelize);
db.employee = require('../models/employee.model')(sequelize, Sequelize);
module.exports = db;