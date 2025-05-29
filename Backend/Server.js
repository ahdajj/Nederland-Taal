const express=require('express')
const app =express()
const route=require('./Config/Routes')
require('./Config/DB')

app.listen(3500, ()=>{console.log('Server Connected')})

app.use(express.json())

app.use(route)