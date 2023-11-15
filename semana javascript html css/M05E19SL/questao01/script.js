function enviarCadastro() {

    // coletar os dados do forms
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value

    //nova div criação
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <span> DADOS DO USUÁRIO </span>
    <p>Nome : ${nome} </p>
    <p>Email : ${email} </p>
    <p>Senha : ${senha} </p>
    `
    document.body.appendChild(div)
    document.getElementById('cadastroForm').reset();

}