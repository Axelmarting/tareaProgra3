function crearPost(){
    const feed = document.getElementById("feed");
    const input = document.getElementById("inputMedio");

    if (input.value.trim() === "") {
        alert("Input vacio, escribir algo para publicar");
        return;
    }

    const div = document.createElement("div");
    div.classList.add("post");

    const texto = document.createElement("p");
    texto.innerText = input.value;

    feed.appendChild(div);
    div.appendChild(texto);
}

botonPublicar.onclick = crearPost;
