const router = require('express').Router()
const personasController = require('../controllers/personasControllers')

router.use('/list', (req,res)=>{
    personasController.list(req,res)
})
router.use('/save', (req,res)=>{
   personasController.create(req,res)
})
router.use('/', (req,res)=>{
    res.json({message: "Recurso personas"})
})

module.exports = router