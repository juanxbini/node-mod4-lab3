# node-mod4-lab3
Laboratorio 3 del modulo 4 del curso de node js.
API REST con Express

1. Crear un servidor que permita manejar una
lista de mascotas y personas.

Laboratorio 3

Consideraciones
● Este debe poseer dos rutas principales:
“/mascotas” y “/personas”. Dentro de las
mismas las subrutas “/listar” y “/guardar”.

● “/guardar” permitirá guardar una persona
o mascota en arrays propios en memoria,
con el siguiente formato:

Persona → { "nombre": ..., "apellido": ..., "edad":... }
Mascota → { "nombre":..., "raza":..., "edad":... }

● “/listar” devolverá la lista requerida en
formato objeto.

2. Utilizar el router de Express para definir las
rutas base, implementando las subrutas en
los métodos correspondientes.

3. Generar en el servidor una carpeta pública
“Public” que tendrá un archivo “index.html”
con dos formularios: uno que permita ingresar
mascotas y otro que permita ingresar
personas, ambos utilizando el método Post.

4. El servidor escuchará peticiones en el puerto
3000 y mostrará en la consola un mensaje de
conexión que muestre dicho puerto junto a
los mensajes de error si ocurriesen.

