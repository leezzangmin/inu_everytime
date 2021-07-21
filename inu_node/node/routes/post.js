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

router.post('/write', function(req, res){
    let data = req.body;
    console.log('123',data);

    models.post.create({
        board_number:data.board_number,
        post_title:data.title,
        post_content:data.content,
        user_number:data.user_number,
        last_modified_date:data.last_modified_date,
    })
        .then( result => {
            console.log("데이터 추가 완료");
            res.redirect("/");
        })
        .catch( err => {
            
            console.log("데이터 추가 실패");
        })
});



module.exports = router;