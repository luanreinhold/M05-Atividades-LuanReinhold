// Aqui serão adicionados seus scripts

// Passo 1
document.getElementById('btnClick').onclick = function () {
    alert("botão clicado!")
}

// Passo 2
document.getElementById('inputText').onchange =  () => {
    this.style.color = 'red'
}

// Passo 3
document.getElementById('inputText').oninput = function () {
    this.style.color = 'green'
}

// Passo 4
document.getElementById('inputText').onkeydown = function () {
    document.getElementById('outputMessage').innerHTML = "tecla pressionada"
}

document.getElementById('inputText').onkeypress = function () {
    document.getElementById('outputMessage').innerHTML = "tecla sendo pressionada"
}

document.getElementById('inputText').onkeyup = function () {
    document.getElementById('outputMessage').innerHTML = "tecla liberada"
}

// Passo 5

var box = document.getElementById('box')
box.onmouseover = function () {
    this.style.background = 'red'
}
box.onmouseout = function () {
    this.style.background = '#00c8a8'
}

// Passo 6
box.ondragstart = function(event) {
    event.dataTransfer.setData('text/plain', 'Drag Me!')
}

box.ondragover = function (event) {
    event.preventDefault();
}

box.ondrop = function(event) {
    event.preventDefault()
    var data = event.dataTransfer.getData('text/plain')
    box.innerText = data
}

// Passo 7 

windows.onload = function() {
    alert ("Pagina totalmente carregada! ")
}