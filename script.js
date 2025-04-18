const mensajes = [
    "Un Programador junior con mentalidad de senior.",
    "Apasionado por Java y la tecnología.",
    "Creador de contenido para programadores.",
    "Especialista en sistemas backend inteligentes.",
    "Transformando ideas en software real."
];

let i = 0;
setInterval(() => {
    document.getElementById("dynamic-text").textContent = mensajes[i];
    i = (i + 1) % mensajes.length;
}, 3000);
