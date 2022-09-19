const router = require('express').Router()
const mascotasController = require('../controllers/mascotasControllers')

router.use('/list', (req,res)=>{
    mascotasController.list(req,res)
})
router.use('/save',(req,res)=>{
    mascotasController.create(req,res)
})
router.use('/',(req,res) =>{
    res.render('mascotas')
})

module.exports = router