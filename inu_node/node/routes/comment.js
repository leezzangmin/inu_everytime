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

router.post('/make', function(req, res){
    let data = req.body;
    console.log('making comment...',data);


    models.comment.create({
        comment_user_number : data.comment_user_number,
        comment_content : data.comment_content,
        comment_depth : data.comment_depth,
        comment_ref : data.comment_ref,
        last_modified_date : data.last_modified_date,
        post_number_ref : data.post_number_ref,
    })
        .then( result => {
            res.json('success');
        })
        .catch( err => {
            console.log(err);
            res.json('fail');
        })
});



module.exports = router;
