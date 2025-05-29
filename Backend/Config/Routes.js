const express=require('express')
const route=express('Router')
const UserController = require('../Controller/UserController')


route.post('/Signup',UserController.Signup) 
route.post('/logIn',)   

module.exports= route