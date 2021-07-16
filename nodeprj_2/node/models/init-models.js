var DataTypes = require("sequelize").DataTypes;
var _board = require("./board");
var _comment = require("./comment");
var _department = require("./department");
var _hashtag = require("./hashtag");
var _post = require("./post");
var _user = require("./user");

function initModels(sequelize) {
  var board = _board(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var hashtag = _hashtag(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  post.belongsTo(board, { as: "board_number_board", foreignKey: "board_number"});
  board.hasMany(post, { as: "posts", foreignKey: "board_number"});
  comment.belongsTo(comment, { as: "comment_ref_comment", foreignKey: "comment_ref"});
  comment.hasMany(comment, { as: "comments", foreignKey: "comment_ref"});
  user.belongsTo(department, { as: "user_department_number_department", foreignKey: "user_department_number"});
  department.hasMany(user, { as: "users", foreignKey: "user_department_number"});
  comment.belongsTo(post, { as: "post_number_ref_post", foreignKey: "post_number_ref"});
  post.hasMany(comment, { as: "comments", foreignKey: "post_number_ref"});
  hashtag.belongsTo(post, { as: "hashtag_post_number_post", foreignKey: "hashtag_post_number"});
  post.hasMany(hashtag, { as: "hashtags", foreignKey: "hashtag_post_number"});
  comment.belongsTo(user, { as: "comment_user_number_user", foreignKey: "comment_user_number"});
  user.hasMany(comment, { as: "comments", foreignKey: "comment_user_number"});
  post.belongsTo(user, { as: "user_number_user", foreignKey: "user_number"});
  user.hasMany(post, { as: "posts", foreignKey: "user_number"});

  return {
    board,
    comment,
    department,
    hashtag,
    post,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
