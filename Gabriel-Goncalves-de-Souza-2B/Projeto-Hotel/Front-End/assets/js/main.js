document.addEventListener("DOMContentLoaded", function () {

    const formCadastro = document.getElementById("formCadastro");

    formCadastro.addEventListener("subimit", function (e) {


        e.preventDefault()

        const dados = Object. fromEntries(
            new FormData(formCadastro)
        );
        console.log("Dados Captuados:");
        console.log("Nome:", ddados.nome);
        console.log("Email:");
        console.log("Telefone:");
    });





});