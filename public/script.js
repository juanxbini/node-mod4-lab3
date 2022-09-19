

const btnMascota = document.querySelector('.ingresar-mascota')

btnMascota.addEventListener('click', e => {
    const nombreMascota = document.getElementById('nombreMascota').value
    const edadMascota = document.getElementById('edadMascota').value
    const razaMascota = document.getElementById('razaMascota').value
    const query = `?nombre=${nombreMascota}&edad=${edadMascota}&raza=${razaMascota}`
    const url = `/mascotas/save${query}`

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));

})