const router = require('express').Router()
const mascotas = require('./mascotas')
const personas = require('./personas')

router.use('/mascotas', mascotas)
router.use('/personas', personas)
router.get('/',(req,res)=>{
    res.json({message: "enrutador funcionando"})
})


module.exports = router