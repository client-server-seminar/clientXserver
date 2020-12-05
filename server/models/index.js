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
db.Detail = require('./detail')(sequelize, Sequelize);
// db.Post = require('./post')(sequelize, Sequelize);
// db.Like = require('./like')(sequelize, Sequelize);

/** 1 : N   User : Post */
db.Main.hasMany(db.Detail, { onDelete: 'cascade' });
db.Detail.belongsTo(db.Main);

/** N: M    User : Post => Like */
// db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
// db.Post.belongsToMany(db.User, { through: 'Like', as: 'Liker' });

module.exports = db;