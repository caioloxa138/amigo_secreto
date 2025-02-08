/* // Array para armazenar os nomes
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Adiciona o nome à lista
    listaAmigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista
    console.log('Lista atual: ', listaAmigos);
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Permite adicionar com a tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede comportamento padrão (ex: envio de formulário)
        adicionarAmigo(); // Chama a função para adicionar o nome
    }
});

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSelecionado = listaAmigos[indiceAleatorio];
    let amigoSelecionadoMaisculo = amigoSelecionado.toUpperCase(); //exibe o resultado em letras maiúsculas
    console.log('Nome sorteado: ', amigoSelecionado);
    // Exibir o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>*** O amigo sorteado foi: <strong>${amigoSelecionadoMaisculo}</strong>! ***</li>`;
} */

// Lista principal de amigos
let listaAmigos = [];
// Lista de nomes disponíveis para sorteio
let nomesDisponiveis = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras e converte para maiúsculas

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    listaAmigos.push(nome);
    nomesDisponiveis.push(nome); // Adiciona o nome também na lista de sorteio
    input.value = ""; 
    atualizarLista();
    console.log('Lista atual: ', listaAmigos);
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Permite adicionar com a tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    if (nomesDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados! A lista será reiniciada.");
        nomesDisponiveis = [...listaAmigos]; // Reinicia a lista de sorteio
    }

    let indiceAleatorio = Math.floor(Math.random() * nomesDisponiveis.length);
    let amigoSelecionado = nomesDisponiveis.splice(indiceAleatorio, 1)[0]; // Remove o nome sorteado
    let amigoSelecionadoMaisculo = amigoSelecionado.toUpperCase(); //exibe o resultado em letras maiúsculas
    console.log('Nome sorteado: ', amigoSelecionado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${amigoSelecionadoMaisculo}</strong>! 🎉</li>`;
}