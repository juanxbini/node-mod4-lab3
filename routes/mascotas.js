const router = require('express').Router()

router.use('/',(req,res) =>{
    res.json({message: "Recurso mascotas"})
})
router.use('/list', (req,res)=>{
    res.json({message: "Accediendo a la ruta /list desde el recurso mascotas"})
})
router.use('/save',(req,res)=>{
    res.json({message: "Accediendo a ruta /save recurso mascotas"})
})

module.exports = router