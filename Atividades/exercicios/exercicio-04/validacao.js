function validacao() {
    const user = document.dados.usuario;
    const nome = document.dados.nome;
    const email = document.dados.email;
    const data = document.dados.data;

    if (user != "" && nome != "" && email != "" && data != "") {
        const dados = new Dados(user, nome, email, data);
        document.getElementById("dados1").innerHTML = "<h2>Dados pessoais</h2><p>Dados: " + dados.user + "</p><p>Nome: " + dados.nome + "</p><p>Email: "
            + dados.email + "</p> <p>Data de criação: "
            + dados.data + "</p>";
    } else {
        document.getElementById("dados1").innerHTML = "Dados inválidos!"
    }
}