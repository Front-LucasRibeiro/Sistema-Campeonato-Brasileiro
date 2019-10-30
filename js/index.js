var listaTimes = [
 {time:'Flamengo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0},
 {time:'Palmeiras', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Santos', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'São Paulo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Internacional', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Corinthians', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Grêmio', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Athletico-PR', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Bahia', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Goiás', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Vasco', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Atlético-MG', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Botafogo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Fortaleza', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Ceará', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Fluminense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Cruzeiro', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'CSA', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Chapecoense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
 {time:'Avaí', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0 },
]

// criar lista de Times jogando entre eles
function criaConfrontos(){
  var listaJogos = [];
  var timesNaoDuplicados = [];

  while(timesNaoDuplicados.length < 20){
    var indiceTimeRandom = Math.floor(Math.random() * 20);

    $.each(listaJogos, function(i, elemento){
      if($.inArray(elemento, timesNaoDuplicados) === -1) timesNaoDuplicados.push(elemento);
    });

    listaJogos.push(indiceTimeRandom);

    $(timesNaoDuplicados).each(function(index, time){

      var td = document.querySelectorAll('#listaJogos td');
      td[index].innerText = listaTimes[time].time;
    });
  }
}







$( document ).ready(function() {

  $('#montarCampeonato').click(function(){
    criaConfrontos();
  });
});