// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    const contaemail = document.getElementById("contaemail");
    const nomeconta = document.getElementById("nomeconta");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        contaemail.innerHTML = email;
        nomeconta.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

//  MENU PERFIL
function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "dashboard.html"
}

function gerenciarconta(){
    window.location.href = '../gerenciar.html'
    window.scrollTo(0, 230);
}

function logout(){
    window.location.href = "login.html"
}

function home() {
    window.location.href = "home.html"
}

function formulario() {
    window.location.href = "votacao.html"
}