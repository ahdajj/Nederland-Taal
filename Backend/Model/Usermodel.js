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
    },
    LessonProgress:[{
       lessonId: { type: String, required: true },
       completedParts: [{ type: String }],
       totalParts:{type: Number},
       isCompleted: { type: Boolean, default: false },
       examId: { type: String, required: false },
    }],
    ExamProgress:[{
        examId: { type: String, required: true },
        score: { type: Number, required: true , default:0},
        date: { type: Date }
    }],
    lastOnline: { type: Date, default: null },
})

const UserModel = mongoose.model('User',UserSchema)
module.exports=UserModel