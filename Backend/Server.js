const express=require('express')
const app =express()
const route=require('./Config/Routes')
require('./Config/DB')
const cookieParser = require('cookie-parser')
const cors = require('cors');

app.listen(3500, ()=>{console.log('Server Connected')})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));

app.use('/api',route)


// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
//   methods: ['GET', 'POST' , 'Update' , 'Delete'] // restrict to GET and POST only
// }));
