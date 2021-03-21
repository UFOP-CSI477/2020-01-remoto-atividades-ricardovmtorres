var corredores = [];
document.getElementById("largada").value = corredores.length + 1;
function Corredor(largada, nome, tempo) {
    this.nome = nome;
    this.tempo = tempo;
    this.largada = largada;
    this.posicao = 0;
    this.resultado = "-"
}

function adicionarCorredor() {
    const l = document.frmDados.largada.value;
    const n = document.frmDados.nome.value;
    const t = document.frmDados.tempo.value;
    if (l == "" || n == "" || t == "") {
        alert("1 ou mais valores são inválidos!");
    } else {
        var corredor = new Corredor(l, n, t);
        corredores.push(corredor);
        var x = document.getElementById("corpo");
        x.innerHTML += "<tr><td>" + l + "</td><td>" + n + "</td><td>"
            + t + "</td></tr>";

        console.log(corredores);
        document.getElementById("largada").value = corredores.length + 1;
        document.getElementById("nome").value = "";
        document.getElementById("tempo").value = "";
        if (corredores.length == 6) {
            document.getElementById("cadastro").style.display = "none";
        }
    }
}

function resultado() {
    var resultado = corredores;
    var aux;
    for (let index = 0; index < resultado.length; index++) {
        for (let j = 0; j < resultado.length - 1; j++) {
            if (resultado[j] > resultado[j + 1]) {
                aux = resultado[j + 1];
                resultado[j + 1] = resultado[j];
                resultado[j] = aux;
            }
        }
    }
    for (let index = 0; index < resultado.length; index++) {
        if (resultado[index].tempo == resultado[0].tempo) {
            resultado[index].posicao = 1;
            resultado[index].resultado = "Vencedor(a)!"
        }

    }
    var x = document.getElementById("corpo2");
    for (let index = 0; index < resultado.length; index++) {
        const element = resultado[index];
        x.innerHTML += "<tr><td>" + resultado[index].posicao + "</td><td>" + resultado[index].largada + "</td><td>" + resultado[index].nome + "</td><td>"
            + resultado[index].tempo + "</td><td>"
            + resultado[index].resultado + "</td></tr>";
    }
}