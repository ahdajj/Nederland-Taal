const express=require('express')
const route=express('Router')
const UserController = require('../Controller/UserController')

route.get('/getUser',UserController.userAuth , UserController.getUser)

route.post('/Signup',UserController.Signup) 
route.post('/logIn', UserController.LogIn)   

module.exports= route