
const express = require('express')
const app = express()

//config 
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//routes

app.get('/', (req,res)=>{
    res.json({message: 'Hola Mundo'})
})

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})
