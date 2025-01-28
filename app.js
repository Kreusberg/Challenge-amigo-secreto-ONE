//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos a serem sorteados
let amigos = [];

// Array para armazenar os nomes dos amigos na lista (ul) "listaAmigos"
let listaAmigos = document.querySelector("ul");

function adicionarAmigo() {
    let resposta = document.querySelector("input");

    // Valida se a resposta é ou não válida
    if (resposta.value == "" || resposta.value.length == 0) {
        alert("Por favorr, digite um nome válido");
    } else {
        // Adiciona o amigo na lista "amigos"
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
