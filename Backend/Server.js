const express=require('express')
const app =express()
require('./Config/DB')

app.listen(3500, ()=>{console.log('Server Connected')})