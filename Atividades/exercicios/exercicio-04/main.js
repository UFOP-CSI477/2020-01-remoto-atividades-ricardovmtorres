'use strict'

function Endereco(logradouro, bairro, cidade, estado, cep) {
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
}

function Pessoa(nome, idade, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
}

function Dados(user, nome, email, data) {
    this.user = user;
    this.nome = nome;
    this.email = email;
    this.data = data;
}

function inserirDados() {
    //inserção
    const nome = window.prompt("Insira seu nome: ");
    const idade = window.prompt("Insira sua idade: ");
    const logradouro = window.prompt("Insira seu logradouro: ");
    const bairro = window.prompt("Insira seu bairro: ");
    const cidade = window.prompt("Insira sua cidade: ");
    const estado = window.prompt("Insira seu estado: ");
    const cep = window.prompt("Insira seu cep: ");
    //criando objs
    const endereco = new Endereco(logradouro, bairro, cidade, estado, cep);
    const pessoa = new Pessoa(nome, idade, endereco);
    //escrevendo no HTML
    //dados da pessoa
    document.getElementById("pessoa").innerHTML = "<h2>Dados pessoais</h2><p>Nome: " + pessoa.nome + "</p><p>Idade: "
        + pessoa.idade + "</p>";
    //endereço da pessoa
    document.getElementById("endereco").innerHTML = "<br><h4>Endereço </h4> <p>Logradouro: " + pessoa.endereco.logradouro
        + "</p><p>Bairro: " + pessoa.endereco.bairro
        + "</p><p>Cidade: " + pessoa.endereco.cidade
        + "</p><p>Estado: " + pessoa.endereco.estado
        + "</p><p>CEP: " + pessoa.endereco.cep + "</p>";

}

function imprimirDados() {
    const user = document.dados.usuario;
    const nome = document.dados.nome;
    const email = document.dados.email;
    const data = document.dados.data;

    const dados = new Dados(user, nome, email, data);
    document.getElementById("dados1").innerHTML = "<h2>Dados pessoais</h2><p>Dados: " + dados.user + "</p><p>Nome: " + dados.nome + "</p><p>Email: "
        + dados.email + "</p> <p>Data de criação: "
        + dados.data + "</p>";
}

function comecar() {
    if (!executando) {
        id = setInterval(inserirDados);
        executando = true;
    }
}

function parar() {
    clearInterval(id);
    executando = false;
}