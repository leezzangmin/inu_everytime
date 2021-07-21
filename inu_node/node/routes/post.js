var express = require('express');
const {Sequelize, sequelize} = require('../models');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

var router = express.Router();

const Post = models.post;
const Comment = models.comment;


// select post
router.get('/', (req, res) => {
    post_number = req.query['post_number'];
    Post.findOne({
        include: [
            {
                model: Comment,
                as: 'comments',
            },
        ],
        where: {
            post_number: post_number,
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

//insert post
router.post('/writePost', function(req, res){
    console.log('호출됨');
    var book = new Book();
    book.title = req.body.name;
    book.author = req.body.author;
    book.published_date = new Date(req.body.published_date);

    book.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});



module.exports = router;
