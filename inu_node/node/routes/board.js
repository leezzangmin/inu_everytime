var express = require('express');
const {Sequelize, sequelize} = require('../models');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

const Post = models.post;

var router = express.Router();

router.get('/', (req, res) => {
    board_number = req.query['board_number'];
    Post.findAll({
        where: {
            board_number: board_number,
        },
        order: [['last_modified_date', 'DESC']],
    })
        .then((data) => {
            res.json(data);
            console.log(`all posts from ${board_number} ---------->`);
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;
