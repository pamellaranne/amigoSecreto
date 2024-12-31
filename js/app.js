let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    if(nomeAmigo == ""){
        alert("Informe o nome do amigo.");
        return;
    }

    if(amigos.includes(nomeAmigo)){
        alert("Esse nome já foi incluído no sorteio.");
        return;
    }


    let lista = document.getElementById("lista-amigos");
    amigos.push(nomeAmigo);

    if (lista.textContent == "") {
        lista.textContent = `${nomeAmigo}`;
    } else {
        lista.textContent = lista.textContent + ", " + `${nomeAmigo}`;
    }

    document.getElementById("nome-amigo").value = "";
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}

function sortear() {
    if(amigos.length < 4){
        alert("Adicione pelo menos 4 amigos para realizar o sorteio!");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "--> " + amigos[0] + "<br>"
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "--> " + amigos[i + 1] + "<br>"
        }
    }

}

function embaralha(amigos) {

    for (indice = amigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [amigos[indice - 1], amigos[indiceAleatorio]] =
            [amigos[indiceAleatorio], amigos[indice - 1]];
    }
}