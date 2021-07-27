// https://velog.io/@pixelstudio/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0.-B


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var express = require('express');
const { Sequelize, sequelize } = require('../models');
const { initModels } = require('../models/init-models');
const models = initModels(sequelize);

var router = express.Router();

const User = models.user;

const {
    registerValidator,
    loginValidator,
} = require("../validation/authValidation");

require("dotenv").config();


router.post('/register', (req, res) => {
    //const { errors, isValid } = registerValidator(req.body);
    //console.log(req.body);

    let { user_id,user_pw,user_nickname,created_date,user_name,user_department_number,user_student_id } = req.body;
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user_pw,salt);

    const newUser = {
        user_id : user_id,
        user_pw : hashedPassword,
        user_nickname : user_nickname,
        created_date : created_date,
        user_name : user_name,
        user_department_number : user_department_number,
        user_student_id : user_student_id,
    };

    console.log(newUser);

    User.findOrCreate({ where: { user_id: user_id }, defaults: newUser })
        .then(([save, created]) => {
            if (!created) {
                return res.status(400).json({ message: "이미 사용중인 id입니다." });
            } else {
                console.log([save, created]);
                res.status(200).json({ status: "Success", "새로운 유저넘버": save.user_number });
            }
        })
        .catch((err) => res.status(500).json({ message: err + "잘안됩니다." }));
});




router.post('/login', async (req, res) => {
    //const { errors, isValid } = loginValidator(req.body);

//   if (!isValid) {
//     return res.status(400).json({message: errors});
//   }
  let { user_id,user_pw } = req.body;

  //const { user_id, user_pw } = req.body;
  
  const user = await User.findOne({ where: { user_id: user_id } });

  if (!user) return res.status(400).send("존재하지 않는 계정입니다.");


  const ValidPassword = await bcrypt.compare(user_pw, user.user_pw);
  if (!ValidPassword) {
    return res.status(400).send("패스워드를 제대로 입력하세요");
  }

  const token = jwt.sign(
    {
      id: user.user_id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1분
    },
    process.env.JWT_SECRET
  );

  
  
  res.cookie("auth_token", token).json({ token: token });
});




module.exports = router;