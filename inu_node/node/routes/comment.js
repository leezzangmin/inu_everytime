var express = require('express');
const {Sequelize, sequelize} = require('../models');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

var router = express.Router();

const Post = models.post;
const Comment = models.comment;

router.get('/', (req, res) => {
    post_number = req.query['comment'];
    Post.findOne({
        include: [
            {
                model: Comment,
                as: 'comments',
            },
        ],
        where: {
            post_number_ref: post_number,
        },
        order: [['last_modified_date', 'DESC']],
    })
        .then((data) => {
            res.json(data);
            console.log(
                `specific post from post number ${post_number} ---------->`,
            );
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;
