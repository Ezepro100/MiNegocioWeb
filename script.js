function pedirWhatsApp() {
const url = "https://api.whatsapp.com/send?phone=5491122581002&text=Hola,%20quiero%20hacer%un%20pedido";

    window.location.href = url;
}

const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        const textoWhatsApp = 
            `Hola, soy ${nombre}.%0A` +
            `Mi correo es: ${correo}.%0A` +
            `Mensaje: ${mensaje}`;

        const url = `https://api.whatsapp.com/send?phone=5491122581002&text=${textoWhatsApp}`;

        window.open(url, "_blank");

        formulario.reset();
    });
}

const botonMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (botonMenu && menu) {
    botonMenu.addEventListener("click", function() {
        menu.classList.toggle("activo");
    });
}

const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});
