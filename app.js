let amigos = [];

var listaAmigos = document.getElementById('listaAmigos');
var resultado = document.getElementById('resultado');

function adicionarAmigo() {
    var amigo = document.getElementById('amigo').value;
    
    if (amigo.trim() !== '') {
        amigos.push(amigo);
        document.getElementById('amigo').value = "";

        atualizarListaAmigos();

    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo foi adicionado à lista.");
        return; 
    }
    
    var indiceAleatorio = Math.floor(Math.random() * amigos.length);
    var nomeSorteado = amigos[indiceAleatorio];
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = nomeSorteado;
}