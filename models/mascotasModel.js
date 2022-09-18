const mascotas = [
    {
        nombre: "Venus",
        edad: 2,
        raza: "Pantera Blanca"
    },
    {
        nombre: "Mike",
        edad: 6,
        raza: "Pantera Blanca"
    },
]

module.exports = {
    find: function(cb){
        cb(false, mascotas)
    },

    save: function(mascota,cb){
        if(mascota){
            mascotas.push(mascota)
            cb(false, mascota)
        }else{
            cb(true,mascota)
        }
    },
}