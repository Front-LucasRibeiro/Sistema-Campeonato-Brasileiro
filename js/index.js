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


function gerarJogos(listaTimes) {

  var jogos = [];
  
  for (var i=0; i<10; i++) {

    for (var j=0; j<20; j++) {
      if(listaTimes[i].time != listaTimes[j].time){
        jogos.push(listaTimes[i]);
        jogos.push(listaTimes[j]);

        var tr = '<tr><td>'+listaTimes[i].time+'<td/><td class="gols"></td><td class="versus">x<td/><td class="gols"></td><td>'+listaTimes[j].time+'<td/><tr/>';
        $('#listaJogos').append(tr);
      }
    }
  }

  gerarGols(jogos)
}




function gerarGols(jogos){

  for(var i=0; i<380; i++) {
    var gols = Math.floor(Math.random() * 6);

    var td = document.querySelectorAll('td.gols')[i];
    td.innerText = jogos[i].saldoGols = gols;;
  }
}










$( document ).ready(function() {

  $('#montarCampeonato').click(function(){
    gerarJogos(listaTimes);
  });
});