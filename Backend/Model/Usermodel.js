const mongoose=require('mongoose')


const Schema=mongoose.Schema
const UserSchema=new Schema({
    FullName:{ 
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
})

const UserModel = mongoose.model('User',UserSchema)
module.exports=UserModel