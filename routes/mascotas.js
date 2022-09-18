const router = require('express').Router()
const mascotasController = require('../controllers/mascotasControllers')

router.use('/',(req,res) =>{
    res.json({message: "Recurso mascotas"})
})
router.get('/list', (req,res)=>{
    mascotasController.list(req,res)
})
router.post('/save',(req,res)=>{
    mascotasController.create(req,res)
})

module.exports = router