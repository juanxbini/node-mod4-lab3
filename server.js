
const express = require('express')
const app = express()
const router = require('./routes/index')

//config 
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//routes

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})
