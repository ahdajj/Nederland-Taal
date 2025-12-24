const express=require('express')
const route=express('Router')
const UserController = require('../Controller/UserController')

// route.get('/getUser',UserController.userAuth , UserController.getUser)
route.get('/me' ,UserController.Auth)
route.get('/Profile' ,UserController.Authmiddleware,UserController.UserProfile)

route.post('/Signup',UserController.Signup) 
route.post('/Login', UserController.Login)
route.post('/Logout', UserController.logout)   
route.post('/Lessonprogress',UserController.Authmiddleware, UserController.Lessonprogress)
route.post('/ExamProgress',UserController.Authmiddleware, UserController.Examprogress)

module.exports= route