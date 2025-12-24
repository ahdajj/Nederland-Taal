const Usermodel = require('../Model/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Signup =(req,res)=>{
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
                return res.json('User Saved')})
            .catch(err=>{
                res.status(500).json('Error saving user')})
           }
        })
       .catch(err =>{res.status(500).json('Database error')})  
}

const Login=(req,res)=>{
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
                         Name:user.FullName,
                         id:user._id
                    }
                    let userToken=jwt.sign(TokenData,'1234')
                    res.cookie('UserLoggedIn',true,{ httpOnly: true, secure: true})
                    res.cookie('Token',userToken,{ httpOnly: true, secure: true })
                    res.json(user.FullName)
                }else{
                    res.status(400).json('Passowrd Incorrect')
                }
        }else{
            res.status(400).json('User Doesnt Exist')
        }    
    })
    .catch(err=>{
        res.status(500).json('Database error')
    })
}

const logout = (req,res)=>{
    res.clearCookie('UserLoggedIn');
    res.clearCookie('Token');
    res.json('LoggedOut')
}

const Auth= (req,res)=>{
    const Token=req.cookies.Token
    if(Token){
        const decodedUser=jwt.verify(Token, '1234')
        res.json(decodedUser.Name)
    } else {
        res.status(401).json('Invalid Token')
    }
}

const Lessonprogress = async (req, res) => {
    try {
        const  id  = req.user;                                          // set by middleware
        const { lessonId, completedParts, isCompleted , totalParts ,examId}=req.body
        const user = await Usermodel.findById(id);
        if (!user) {
            return res.status(404).json("User not found" );
        }
        const existingLesson = user.LessonProgress.find((lesson) => lesson.lessonId === lessonId);
        if (existingLesson) {
            existingLesson.completedParts = completedParts;
            existingLesson.isCompleted = isCompleted;
        } else {
            user.LessonProgress.push({
                lessonId,
                completedParts,
                isCompleted,
                totalParts,
                examId
            });
        }

        await user.save();
        return res.json({
            message: "Lesson progress saved successfully",
            lessonProgress: user.LessonProgress
        });

    } catch (error) {
        console.error(error);
        res.status(500).json("Server error");
    }
};

const Examprogress = async (req,res)=>{
    try {
        const id=req.user                                           // set by middleware
        const{examId , score}=req.body  
        const user = await Usermodel.findById(id)
        if(!user){
           return  res.status(404).json('Cant find user')
        }
        const Existingexam = user.ExamProgress.find((exam)=>exam.examId ==examId)
        if(Existingexam){
            Existingexam.score=score
        } else {
            user.ExamProgress.push({
                examId,
                score
            })
        }

        await user.save()
        return res.json({
            message: "Exam progress saved successfully",
            ExamProgress: user.ExamProgress
        });
    } catch(error) {
        console.error(error);
        res.status(500).json("Server error");
    }   
}
const UserProfile = async (req,res)=>{
    const id = req.user
    try{
        const user = await Usermodel. findById(id)
        res.json(user)
    } catch(err){
         res.status(500).json("Server error");
    }
    
}

///// Auth middleware:
const Authmiddleware =(req ,res , next)=>{
    const Token=req.cookies.Token
    if(Token){
        try{
        const decodeduser=jwt.verify( Token,'1234')
        req.user=decodeduser.id
        next()
        }
        catch (error){
            return res.status(403).json("Invalid or expired token")
        }
    } else {
       return  res.status(403).json("No token Provided")
    }
}

module.exports ={
    Signup,
    Login,
    logout,
    Auth,
    Lessonprogress,
    Examprogress,
    Authmiddleware,
    UserProfile
}


// const getUser = (req,res)=>{
//      res.json(req.user.fulName);
// }

// // middle ware
// const userAuth = (req,res,next)=>{
//     if(req.cookies.Token){
//         jwt.verify(req.cookies.Token , '1234' , function (err,decoded){
//             if(err){
//                 console.log('error with verify token')
//             } else {
//                 req.user=decoded
//             }
//         })
//         next()
//     } else {
//         console.log('Login first')
//     //    res.json('Login first')
//     }
// }

// updating with .findById() , .findByIdandUpdate
// If performance matters → use findByIdAndUpdate
// If readability matters → use findById + save
// const LessonProgress = async (req, res) => {
//  try {
//     const { id, lessonId, completedParts, isCompleted } = req.body;

//     // Try to update existing lesson progress
//     const updated = await User.findOneAndUpdate(
//       { _id: id, "LessonProgress.lessonId": lessonId },
//       {
//         $set: {
//           "LessonProgress.$.completedParts": completedParts,
//           "LessonProgress.$.isCompleted": isCompleted
//         }
//       },
//       { new: true }
//     );

//     if (updated) {
//       return res.json({
//         message: "Lesson progress updated",
//         lessonProgress: updated.LessonProgress
//       });
//     }

//     // If not found, push new lesson progress
//     const added = await User.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           LessonProgress: {
//             lessonId,
//             completedParts,
//             isCompleted
//           }
//         }
//       },
//       { new: true }
//     );

//     return res.json({
//       message: "Lesson progress added",
//       lessonProgress: added.LessonProgress
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// }