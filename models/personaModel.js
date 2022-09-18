const personas = [
    {
        nombre: "Juan",
        apellido: "Bini",
        edad: 25
    },
    {
        nombre: "Sabrina",
        apellido: "Peralta",
        edad: 24
    }
]
module.exports = {
    find: function(cb){
        cb(false, personas)
    },
    save: function(persona,cb){
        if(persona){
            personas.push(persona)
            cb(false, persona)
        }else{
            cb(true, persona)
        }
    },
}