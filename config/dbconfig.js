const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
mongoose.
connect('mongodb://127.0.0.1/deba-deba')
.then(() => {
    console.log('connected to MongoDB')
   
}).catch((error) => {
    console.log(error)
})