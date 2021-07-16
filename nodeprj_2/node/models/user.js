const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_number: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_pw: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_nickname: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    user_department_number: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'department',
        key: 'department_number'
      }
    },
    user_student_id: {
      type: DataTypes.STRING(9),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_number" },
        ]
      },
      {
        name: "user_department_number",
        using: "BTREE",
        fields: [
          { name: "user_department_number" },
        ]
      },
    ]
  });
};
