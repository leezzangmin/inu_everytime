var express = require('express');
const {Sequelize, sequelize} = require('../models');
const {initModels} = require('../models/init-models');
const models = initModels(sequelize);

const Board = models.board;

var router = express.Router();

router.get('/', (req, res) => {
    Board.findAll()
        .then((data) => {
            res.json(data);
            console.log('all boards ---------->');
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;
