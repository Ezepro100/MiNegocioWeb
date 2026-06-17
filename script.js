function pedirWhatsApp() {
const url = "https://api.whatsapp.com/send?phone=5491122581002&text=Hola,%20quiero%20hacer%un%20pedido";

    window.location.href = url;
}

const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("¡Gracias por contactarnos! Te responderemos pronto.");

        formulario.reset();
    });
}
