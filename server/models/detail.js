module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Detail', {
        thumbnail: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        episodeNum: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
        },
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        rate: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
        },
        uploadDate: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }

    }, {
        freezeTableName: true,
        timestamps: true,
    });
};