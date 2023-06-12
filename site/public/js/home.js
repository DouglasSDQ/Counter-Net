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
    window.location.href = '../gerenciar.html'
    window.scrollTo(0, 230);
}

function logout(){
    window.location.href = "../PáginaInicial/home.html"
}

function home() {
    window.location.href = "../PáginaInicial/home.html"
}


function dust(){
    window.location.href = "mapas.html"
}