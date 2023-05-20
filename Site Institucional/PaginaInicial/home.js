function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "../PaginadeConsulta/consulta.html"
}

function gerenciarconta(){
    window.location.href = '../PaginaGerenciarConta/gerenciar.html#aqui'
    window.scrollTo(0, 230);
}

function logout(){
    window.location.href = "../PáginaInicial/home.html"
}

function home() {
    window.location.href = "../PáginaInicial/home.html"
}
