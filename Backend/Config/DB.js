const mongoose = require('mongoose')

const dburl='mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/Nederlandlang?retryWrites=true&w=majority'
mongoose.connect(dburl)
.then(()=>{console.log('DB is connected')})
.catch((err)=>{console.log(err)})