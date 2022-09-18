const personasModel = require('../models/personaModel')

module.exports = {
    list: function (req, res) {
        personasModel.find((err, persona) => {
            return res.status(200).json(persona)
        })
    },
    create: function(req,res) {
        let persona = req.query
        console.log(persona)
        personasModel.save(persona,(err,persona)=>{
            if(err){
                return res.status(500).json({
                    message:"Error al crear una nueva persona"
                })
            }
            return res.status(200).json({
                message: `${JSON.stringify(persona)} saved`
            })
        })
    }
}