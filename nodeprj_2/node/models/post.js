const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    post_number: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    board_number: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'board',
        key: 'board_number'
      }
    },
    post_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    post_content: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "insert contents"
    },
    user_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_number'
      }
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_number" },
        ]
      },
      {
        name: "board_number",
        using: "BTREE",
        fields: [
          { name: "board_number" },
        ]
      },
      {
        name: "user_number",
        using: "BTREE",
        fields: [
          { name: "user_number" },
        ]
      },
    ]
  });
};
