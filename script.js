/* ABRIR CARTA */
function abrirCarta() {
    const sobre = document.querySelector(".sobre");
    sobre.classList.toggle("abierto");
}

/* MENSAJE OCULTO */
function mostrarOculto() {
    document.getElementById("oculto").classList.toggle("hidden");
}

/* JUEGO SI O SÍ */
function moverBoton() {
    const boton = document.querySelector(".no");
    boton.style.position = "absolute";
    boton.style.left = Math.random() * 80 + "%";
    boton.style.top = Math.random() * 80 + "%";
}

function siMePerdonas() {
    alert("Sabía que sí ❤️ Te amo mucho");
}

/* ANIMACIÓN TE AMO AL HACER CLICK */
function crearTeAmo(e) {
    const span = document.createElement("span");
    span.classList.add("teamo");
    span.innerText = "💖 Te amo 💖";
    span.style.left = e.clientX + "px";
    span.style.top = e.clientY + "px";

    document.body.appendChild(span);

    setTimeout(() => span.remove(), 1200);
}
