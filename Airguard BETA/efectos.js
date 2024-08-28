document.getElementById('toggle-menu').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic en el botón cierre el menú
    var navbar = document.getElementById('navbar');
    var content = document.querySelector('.content'); // Asume que el resto del contenido está dentro de un div con la clase .content
    
    navbar.classList.toggle('active');
    content.classList.toggle('blur');
});

document.addEventListener('click', function(event) {
    var navbar = document.getElementById('navbar');
    var content = document.querySelector('.content');
    var isClickInside = navbar.contains(event.target);

    if (!isClickInside && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        content.classList.remove('blur');
    }
});


function actualizarFechaYSaludo() {
    const fechaElement = document.getElementById('fecha');
    const saludoElement = document.getElementById('saludo');

    const fecha = new Date();
    
    // Obtener la fecha en formato "día de mes"
    const opcionesFecha = { month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    
    // Añadir el año al final con una coma
    const año = fecha.getFullYear();
    const fechaFinal = `${fechaFormateada}, ${año}`;
    
    // Actualizar el contenido de la fecha
    fechaElement.textContent = fechaFinal.charAt(0).toUpperCase() + fechaFinal.slice(1);
    
    // Determinar el saludo según la hora
    const hora = fecha.getHours();
    let saludo;
    
    if (hora < 12) {
        saludo = 'Buenos Días';
    } else if (hora < 18) {
        saludo = 'Buenas Tardes';
    } else {
        saludo = 'Buenas Noches';
    }

    // Actualizar el contenido del saludo
    saludoElement.textContent = saludo;
}

// Llamar a la función una vez cuando se carga la página
actualizarFechaYSaludo();

// Llamar a la función cada minuto para actualizar la fecha y el saludo
setInterval(actualizarFechaYSaludo, 60000);
