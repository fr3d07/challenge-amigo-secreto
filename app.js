// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Asegúrate de que el ID sea correcto
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    if (nombre === "") {
        alert("Ingrese un nombre válido");
    } else {
        amigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpia el campo después de agregar el nombre
    }
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indiceAleatorio];
        document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
    }
}
