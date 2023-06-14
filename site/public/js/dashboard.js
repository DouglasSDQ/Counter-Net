setInterval(plotarGrafico, 1000);


var Mirage = 0;
var DustII = 0;
var Inferno = 0;
var CacheMapa = 0;
var Train = 0;
var Overpass = 0;
var Vertigo = 0;
var Cobblestone = 0;
var Nuke = 0;



var dataVetor = [];
var nomesMapas = [];
function plotarGrafico() {

  var somaVotos = 0;
  var porcentagemVotos = 0;
  var nomeMapaMaisJogado = '';

  fetch("/usuarios/plotarGrafico", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");


      if (resposta.ok) {

        resposta.json().then((json) => {



          Mirage = json[0].Mirage;
          DustII = json[0].DustII;
          Inferno = json[0].Inferno;
          CacheMapa = json[0].Cache;
          Train = json[0].Train;
          Overpass = json[0].Overpass;
          Vertigo = json[0].Vertigo;
          Cobblestone = json[0].Cobblestone;
          Nuke = json[0].Nuke;

          dataVetor = [Mirage, DustII, Inferno, CacheMapa, Train, Overpass, Vertigo, Cobblestone, Nuke]

          nomeMapas = ['Mirage', 'DustII', 'Inferno', 'CacheMapa', 'Train', 'Overpass', 'Vertigo', 'Cobblestone', 'Nuke']

          var MaiorValor = dataVetor[0];

          atualizarGraficoNovosDados(dataVetor);

          for (var s = 0; s < dataVetor.length; s++) {

            somaVotos += dataVetor[s];

            if (MaiorValor < dataVetor[s]) {


              MaiorValor = dataVetor[s];
              nomeMapaMaisJogado = nomeMapas[s];


            }

          }

          porcentagemVotos = (MaiorValor / somaVotos) * 100;
          somaVotosID.innerHTML = somaVotos;
          porcentagemVotosID.innerHTML = `${porcentagemVotos.toFixed(2)}%`;
          NomeMapaMaisJogadoID.innerHTML = nomeMapaMaisJogado;
          votoUsuarioID.innerHTML = sessionStorage.VOTO_USUARIO;

        });
      } else {
        resposta.text().then((texto) => {
        });
      }
    });

}




const ctx = document.getElementById('grafico');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mirage', 'Dust II', 'Inferno', 'Cache', 'Train', 'Overpass', 'Vertigo', 'Cobblestone', 'Nuke'],
    datasets: [{
      label: 'Quantidade de votos',
      data: dataVetor,
      borderWidth: 1,
      backgroundColor: '#C36B1A',
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Votos por Mapa',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Função para atualizar o gráfico com novos dados
function atualizarGraficoNovosDados(novosDados) {
  myChart.data.datasets[0].data = novosDados;
  myChart.update();
}


