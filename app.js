//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declarar a array amigos
let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // Validar a entrada
  if (nome === "") {
    alert("Por favor, insira um nome!.");
    return;
  }

  // Atualizar o array de amigos e limpar o campo de entrada
  amigos.push(nome);
  input.value = "";

  // Atualizar a lista de amigos no HTML
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo na lista para sortear.");
    return;
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar o resultado do sorteio no HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
