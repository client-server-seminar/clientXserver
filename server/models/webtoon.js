module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Webtoon', {
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING(50),
            allowNull: false,
          },
        author: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        day: {//요일
          type: DataTypes.STRING(10),
          allowNull: false,
        }
        ,
        description: {
          type: DataTypes.TEXT(),
          allowNull: false,
        },
        thumnail: {
          type: DataTypes.STRING(100),
          allowNull: true,
        }
    }, {
      //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: true,
    });
  };