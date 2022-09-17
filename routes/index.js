const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({message: "enrutador funcionando"})
})


module.exports = router