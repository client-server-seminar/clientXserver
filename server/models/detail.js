module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Detail', {
      //모델의 Attributes (Column)을 정의하는곳
        thumbnailImageUrl: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        num: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        }
    }, {
      //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: true,
    });
};