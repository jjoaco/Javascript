class pre {
    constructor({ n }) {
        this.n = n;
    }
}
const mensajePantalla = () => {
    const lista = new pre({
    n: document.getElementById("mensajePantalla").value,
    })
    const mensajeP = document.createElement("li")
    const mensaje = document.createElement("li")
    mensaje.textContent = lista.n
    mensajeP.appendChild(mensaje)
    
    document.getElementById("lista").appendChild(mensajeP)
    return producto
}
document.getElementById("boton").addEventListener("click", () => {
    mensajePantalla()
})