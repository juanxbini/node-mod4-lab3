
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const router = require('./routes/index')

//config 
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.engine('hbs',exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//routes
app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})
