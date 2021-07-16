const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashtag', {
    hashtag_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hashtag_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    hashtag_post_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_number'
      }
    }
  }, {
    sequelize,
    tableName: 'hashtag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hashtag_number" },
        ]
      },
      {
        name: "hashtag_post_number",
        using: "BTREE",
        fields: [
          { name: "hashtag_post_number" },
        ]
      },
    ]
  });
};
