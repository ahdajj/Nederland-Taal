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
            .then(()=>res.json('saved'))
            .catch(err=>console.log(err))
           }
        })
       .catch(err =>console.log(err))  
}


module.exports ={
    Signup
}