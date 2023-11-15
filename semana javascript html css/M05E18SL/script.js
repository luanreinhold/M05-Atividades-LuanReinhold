

// Exercício 1
function esconderFoto() {
    const divFoto = document.getElementById("foto")
    if (divFoto.style.visibility == "hidden") {
        divFoto.style.visibility = "visible"
    }
    else {
        divFoto.style.visibility = "hidden"
    }
}

// Exercício 2
function alterarTexto() {
    const divTexto = document.getElementById("sobre")
    const input = document.getElementById("format")
    divTexto.style.textAlign = input.value
}

// Exercício 3
function alterarCor() {
    const footer = document.getElementById("footer")
    const header = document.getElementById("header")
    const input = document.getElementById("formatColor")
    footer.style.color = input.value
    header.style.color = input.value
    footer.style.backgroundColor = input.value
    header.style.backgroundColor = input.value

    if(input.value == "black") {
        header.style.backgroundColor = "black"
        header.style.color = "white"
        footer.style.backgroundColor = "black"
        footer.style.color = "white"
    }
    else if (input.value == "white") {
        header.style.backgroundColor = "white"
        header.style.color = "black"
        footer.style.backgroundColor = "white"
        footer.style.color = "black"
    }   
    else {
        header.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value
    }
}

// Exercicio 4
function alterarFonte() {
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('font');

    divTexto.style.fontFamily = input.value;
}

// Trocar cor de fundo
function modo() {

    const sec = document.getElementById("conteudo")
    if(sec.style.backgroundColor == "white") {
        sec.style.backgroundColor = "black";
        sec.style.color = 'white'
    }
    else {
        sec.style.backgroundColor = "white"
        sec.style.color = "black"
    }

 }