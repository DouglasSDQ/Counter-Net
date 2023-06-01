function clickVoltar() {
    window.history.back();
}



function alterarEmail() {
    var emailVar = i_email.value;
    var idUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/autenticar", {
        method: "UPDATE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: emailVar,
            idUsuarioServer: idUsuarioVar
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.idUsuario;

                   
                });
            } else {
                console.log("Houve um erro ao tentar alterar o email!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

   
