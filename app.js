//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
    let resposta = document.querySelector("input");

    if (resposta.value == "" || resposta.value.length == 0) {
        alert("Por favor. Digite um valor válido");
    } else {
        nomes.push(resposta.value);
        resposta.value = "";
    }

}