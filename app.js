//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let listaAmigos = document.querySelector("ul");

function adicionarAmigo() {
    let resposta = document.querySelector("input");

    console.log(resposta.value);

    if (resposta.value == "" || resposta.value.length == 0) {
        alert("Por favor. Digite um valor válido");
    } else {
        amigos.push(resposta.value);
        console.log(amigos);

        // chama a função responsável por adicionar o nome do amigo na lista "listaAmigos"
        atualizarListaAmigos();

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

}
