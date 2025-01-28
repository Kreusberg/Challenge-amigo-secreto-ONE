//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let listaAmigos = document.querySelector("ul");

function adicionarAmigo() {
    let resposta = document.querySelector("input");

    if (resposta.value == "" || resposta.value.length == 0) {
        alert("Por favor. Digite um valor válido");
    } else {
        amigos.push(resposta.value);
        resposta.value = "";

        // chama a função responsável por adicionar o nome do amigo na lista "listaAmigos"
        atualizarListaAmigos();

    }

}

function atualizarListaAmigos() {

    listaAmigos.innerHTML = "";

    // element aqui representa o nome do amigo digitado no campo "resposta" (tag input)
    amigos.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        listaAmigos.appendChild(li);
    })

}

function sortearAmigo() {

    let resultado = document.getElementById("resultado");

    // Como na função adicionarAmigo() já é feito uma validação impedindo que um valor nulo seja adicionado, 
    // não há necessidade de adicionar esta validação aqui, pois caso o código chegue até este ponto, já é intrínseco o fato de que a lista "amigos" não está vazia
    let indiceAleatorio = parseInt(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    
    listaAmigos.innerHTML = "";

}
