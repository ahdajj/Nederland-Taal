const Usermodel = require('../Model/Usermodel')
const bcrypt = require('bcrypt')

const Signup =(req,res)=>{

    if( !req.body.FullName || !req.body.Email || !req.body.Password){
      return  res.json('Please fill all fields')
    }
    if( req.body.Email.includes('@')===false){
       return res.json('WrongEmail')
    }
    Usermodel.findOne({Email:req.body.Email})
       .then((data)=>{
           if(data){
             return res.json('User Exist')
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
                    res.cookie('UserLoggedIn',true,{ httpOnly: true, secure: true })
                    res.cookie('Token',TokenData,{ httpOnly: true, secure: true })
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


module.exports ={
    Signup,
    LogIn,
    logout
}