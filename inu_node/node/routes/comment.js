var express = require('express');
const {Sequelize, sequelize} = require('../models');
const comment = require('../models/comment');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

var router = express.Router();

//const comment = models.post;
const Comment = models.comment;

router.get('/', (req, res) => {
    comment_number = req.query['comment_number'];
    console.log(comment_number);
    Comment.findAll({
        where: {
            post_number_ref: comment_number,
        },
     order: [['last_modified_date', 'DESC']],
    })
        .then((data) => {
            res.json(data);
            
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;
