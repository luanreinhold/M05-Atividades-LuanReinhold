// Aqui serão adicionados seus scripts

// Exercício 1
const noticia_principal = document.getElementById("noticia-principal")
// alert(noticia_principal.innerHTML)

// Exercício 2
const tituloNoticia = document.getElementsByTagName("h1");
for (let titulo of tituloNoticia) {
    titulo.style.fontWeight = "bold"
    titulo.classList.add("titulo-noticia");
    titulo.style.color = "blue"
}

// Exercício 3
const paragrafosNoticia = document.getElementsByClassName("paragrafo-noticia");
for (const paragrafo of paragrafosNoticia) {
    paragrafo.innerHTML = "Leia a notícia completa";
}

// Exerício 4
const secaoComentario = document.getElementById("secao-comentarios");
const novoComentario = document.createElement("p");
novoComentario.innerHTML = "Deixe seu comentário"
secaoComentario.appendChild(novoComentario)

// Exercício 5
const ultimasAtualizacoes = document.getElementById("ultimas-atualizacoes")
const ultimoItem = ultimasAtualizacoes.lastElementChild;
ultimasAtualizacoes.removeChild(ultimoItem)

// Desafio 
const alternarTema = document.getElementById("alternar-tema");
alternarTema.addEventListener("click", () => {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff"
})