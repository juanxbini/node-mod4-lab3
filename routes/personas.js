const router = require('express').Router()

router.use('/list', (req,res)=>{
    res.json({message: "Ruta /list recurso personas"})
})
router.use('/save', (req,res)=>{
    res.json({message: "Ruta /save recurso personas"})
})
router.use('/', (req,res)=>{
    res.json({message: "Recurso personas"})
})

module.exports = router