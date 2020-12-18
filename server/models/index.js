const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Webtoon = require('./webtoon')(sequelize, Sequelize);
db.Detail = require('./detail')(sequelize, Sequelize);

/** 1 : N   User : Post */
db.Webtoon.hasMany(db.Detail, { onDelete: 'cascade' });
db.Detail.belongsTo(db.Webtoon);

module.exports = db;