const express=require('express')
const route=express('Router')
const UserController = require('../Controller/UserController')

// route.get('/getUser',UserController.userAuth , UserController.getUser)

route.post('/Signup',UserController.Signup) 
route.post('/login', UserController.Login)
route.post('logout', UserController.logout)   
route.get('/me' ,UserController.Auth)
module.exports= route