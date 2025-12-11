const express =require("express")
const { register, login } = require("../controllers/authController");
const {protect}=require("../middleware/authMiddleware")

const router=express.Router();

router.post('/register',register)
router.post('/login',login)

    // Protected Route
    router.get('/profile',protect,(req,res)=>{
        res.json({message:"Authorized access", userId:req.user})
    })
    module.exports= router;