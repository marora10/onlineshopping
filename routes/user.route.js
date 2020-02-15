const express= require('express')
const router = express.Router();
const user_controller= require("../controllers/user.controller")
const auth=require("../middlewares/auth")

router.post("/signup",user_controller.signup)

router.post("/signin",user_controller.signin)

router.post("/signout",user_controller.signout)

router.post("/signoutall",user_controller.signoutall)

router.post("/",auth,user_controller.retriveuser)

module.exports= router 