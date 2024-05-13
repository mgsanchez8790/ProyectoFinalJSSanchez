// Datos id celulares
const celulares = [
    { id: 1, marca: "Samsung", modelo: "Galaxy S20", precio: 1000 },
    { id: 2, marca: "Apple", modelo: "iPhone 12", precio: 1200 },
    { id: 3, marca: "Xiaomi", modelo: "Redmi Note 9", precio: 500 }
];

// Función para mostrar los celulares en la interfaz
function mostrarCelulares() {
    const celularesLista = document.getElementById("celulares-lista");
    celularesLista.innerHTML = ""; // Limpiar la lista antes de mostrar los celulares

    celulares.forEach(celular => {
        const celularElemento = document.createElement("div");
        celularElemento.classList.add("celular");
        celularElemento.innerHTML = `
            <img src="Multimedia/${celular.modelo.toLowerCase().replace(/\s/g, '_')}.jpeg" alt="${celular.modelo}">
            <h3>${celular.marca} ${celular.modelo}</h3>
            <p>Precio: $${celular.precio}</p>
            <button onclick="agregarAlCarrito(${celular.id})">Agregar al carrito</button>
        `;
        celularesLista.appendChild(celularElemento);
    });
}

// Función para agregar un celular al carrito
function agregarAlCarrito(celularId) {
    // Aquí podrías implementar la lógica para agregar el celular al carrito
    // Por simplicidad, solo mostraremos un mensaje en la consola
    console.log(`Celular con ID ${celularId} agregado al carrito.`);
}

// Función para reproducir o pausar el video
function toggleVideo() {
    var video = document.getElementById("video-player");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Mostrar los celulares al cargar la página
mostrarCelulares();

// Datos de clientes para localStorage
const personas = [
    { nombre: "Sebastian", edad: 41, ciudad: "Unquillo" },
    { nombre: "Gabriel", edad: 40, ciudad: "Córdoba" },
    { nombre: "Jairo", edad: 33, ciudad: "Mendiolaza" },
    { nombre: "Brenda", edad: 25, ciudad: "General Cabrera" }
];

// Almacenamiento datos de clientes en localStorage
localStorage.setItem("personas", JSON.stringify(personas));
