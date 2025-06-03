const express=require('express')
const app =express()
const route=require('./Config/Routes')
require('./Config/DB')
const cookieParser = require('cookie-parser')
const cors = require('cors');

app.listen(3500, ()=>{console.log('Server Connected')})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // if you're using cookies/auth headers , also we add the same in axios react
}));

app.use(route)