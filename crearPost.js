function crearPost(){
    const feed = document.getElementById("feed");

    const div = document.createElement("div");
    div.classList.add("post");

    const texto = document.createElement("p");
    texto.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit, id velit provident eligendi tempore dolorem voluptatem quo dolorum perspiciatis!";

    feed.appendChild(div);
    div.appendChild(texto);
}

botonPublicar.onclick = crearPost;
