const Usermodel = require('../Model/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Signup =(req,res)=>{  console.log(req.body)
    if( !req.body.FullName || !req.body.Email || !req.body.Password){
      return  res.status(400).json('Please fill all fields')
    }
    if( req.body.Email.includes('@')===false){
       return res.status(400).json('WrongEmail')
       //return res.status(400).json({ message: "Email is Wrong" });
    }
    Usermodel.findOne({Email:req.body.Email})
       .then((data)=>{
           if(data){
             return res.status(400).json('Email already exists')
           } else {
            var hash = bcrypt.hashSync(req.body.Password,12)
            const newuser=new Usermodel({...req.body,Password:hash})
             newuser.save()
            .then(()=>{
                return res.json('saved')})
            .catch(err=>{
                 console.log(err);
                res.status(500).json('Error saving user')})
           }
        })
       .catch(err =>{
        console.log(err)
         res.status(500).json('Database error')
        })  
}

const LogIn=(req,res)=>{
    if(!req.body.Email || !req.body.Password){
      return  res.status(400).json('Please fill all fields')
    }
    if( req.body.Email.includes('@')===false){
      return res.status(400).json('WrongEmail')
    }
    Usermodel.findOne({Email:req.body.Email})
    .then(user =>{
        if(user !==null){
            let CorrectPass=bcrypt.compareSync(req.body.Password , user.Password)
                if(CorrectPass){
                    let TokenData={
                         id:user._id, 
                         fulName:user.FullName,
                         email:user.Email
                    }
                    let userToken=jwt.sign(TokenData,'1234')
                    res.cookie('UserLoggedIn',true,{ httpOnly: true, secure: true})
                    res.cookie('Token',userToken,{ httpOnly: true, secure: true })
                    res.json('LoggedIn')
                }else{
                    res.json('Passowrd Incorrect')
                }
        }else{
            res.json('User Doesnt Exist')
        }    
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json('Database error')
    })
}

const logout = (req,res)=>{
    res.clearCookie('UserLoggedIn');
    res.clearCookie('Token');
    res.json('LoggedOut')
}

const userAuth = (req,res,next)=>{
    if(req.cookies.Token){
        jwt.verify(req.cookies.Token , '1234' , function (err,decoded){
            if(err){
                console.log('error with verify token')
            } else {
                req.user=decoded
            }
        })
        next()
    } else {
       res.json('Login first')
    }
}

module.exports ={
    Signup,
    LogIn,
    logout
}