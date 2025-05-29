const Usermodel = require('../Model/Usermodel')


const Signup =(req,res)=>{
    console.log(req.body)
    // const newuser=new Usermodel(req.body)
    // newuser.save()
    // .then(()=>res.json('saved'))
    // .catch(err=>console.log(err))
}


module.exports ={
    Signup
}