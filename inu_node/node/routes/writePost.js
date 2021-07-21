var express = require('express');
const {Sequelize, sequelize} = require('../models');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

var router = express.Router();


//insert post

router.post('/', function(req, res){
    let data = req.body;
    console.log('123',data);

    models.post.create({
        board_number:data.board_number,
        title:data.title,
        content:data.content,
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