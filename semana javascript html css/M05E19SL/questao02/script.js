function enviarReserva() {

    // coletar dados do formulario
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value
    
    
    //criar uma div com os dados fornecidos
    const div = document.getElementById('dadosReserva');
    div.innerHTML = 
    `
    <span> DADOS DO USUÁRIO </span>
    <p>Nome : ${nome} </p>
    <p>Telefone: ${telefone} </p>
    <p>Data : ${data} </p>
    `
    document.body.appendChild(div)
    document.getElementById('reservaForm').reset();
}