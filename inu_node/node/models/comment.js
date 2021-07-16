const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    comment_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    comment_user_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_number'
      }
    },
    comment_content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    comment_depth: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    comment_ref: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'comment',
        key: 'comment_number'
      }
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    post_number_ref: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_number'
      }
    }
  }, {
    sequelize,
    tableName: 'comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_number" },
        ]
      },
      {
        name: "comment_ref",
        using: "BTREE",
        fields: [
          { name: "comment_ref" },
        ]
      },
      {
        name: "post_number_ref",
        using: "BTREE",
        fields: [
          { name: "post_number_ref" },
        ]
      },
      {
        name: "comment_user_number",
        using: "BTREE",
        fields: [
          { name: "comment_user_number" },
        ]
      },
    ]
  });
};
