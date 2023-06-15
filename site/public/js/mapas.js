
const DustConteudo = document.getElementById("DustConteudo");
const MirageConteudo = document.getElementById("MirageConteudo");
const InfernoConteudo = document.getElementById("InfernoConteudo");
const NukeConteudo = document.getElementById("NukeConteudo");
const OverpassConteudo = document.getElementById("OverpassConteudo");
const TrainConteudo = document.getElementById("TrainConteudo");
const CacheConteudo = document.getElementById("CacheConteudo");
const CobbleConteudo = document.getElementById("CobbleConteudo");
const VertigoConteudo = document.getElementById("VertigoConteudo");


function MostrarInfo(mapaEscolhido) {
    DustConteudo.style.display = 'none';
    MirageConteudo.style.display = 'none';
    InfernoConteudo.style.display = 'none';
    NukeConteudo.style.display = 'none';
    OverpassConteudo.style.display = 'none';
    TrainConteudo.style.display = 'none';
    CacheConteudo.style.display = 'none';
    CobbleConteudo.style.display = 'none';
    VertigoConteudo.style.display = 'none';


    switch (mapaEscolhido) {
        case 'Dust2':
            DustConteudo.style.display = 'flex'
            break;
        case 'Mirage':
            MirageConteudo.style.display = 'flex'
            break;
        case 'Inferno':
            InfernoConteudo.style.display = 'flex'
            break;
        case 'Nuke':
            NukeConteudo.style.display = 'flex'
            break;
        case 'Overpass':
            OverpassConteudo.style.display = 'flex'
            break;
        case 'Train':
            TrainConteudo.style.display = 'flex'
            break;
        case 'Cache':
            CacheConteudo.style.display = 'flex'
            break;
        case 'Cobble':
            CobbleConteudo.style.display = 'flex'
            break;
        case 'Vertigo':
            VertigoConteudo.style.display = 'flex'
            break;

    }
}