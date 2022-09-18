const mascotasModel = require('../models/mascotasModel')

module.exports = {
    list: function (req, res) {
        mascotasModel.find((err, mascota) => {
            return res.status(200).json(mascota)
        })
    },
    create: function(req,res) {
        let mascota = req.body
        mascotasModel.save(mascota,(err,mascota)=>{
            if(err){
                return res.status(500).json({
                    message:"Error al crear una nueva mascota"
                })
            }
            return res.status(200).json({
                message: `${mascota} saved`
            })
        })
    }
}