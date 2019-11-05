var listaTimes = [
{time:'Flamengo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0},
{time:'Palmeiras', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Santos', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'São Paulo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Internacional', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Corinthians', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Grêmio', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Athletico-PR', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Bahia', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Goiás', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Vasco', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Atlético-MG', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Botafogo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Fortaleza', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Ceará', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Fluminense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Cruzeiro', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'CSA', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Chapecoense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
{time:'Avaí', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
]


function gerarJogos(listaTimes) {

  var jogos = [];
  
  for (var i=0; i<20; i++) {

    for (var j=0; j<20; j++) {
      if(listaTimes[i].time != listaTimes[j].time){
        jogos.push(listaTimes[i]);
        jogos.push(listaTimes[j]);

        var tr = '<tr><td id="mandante">'+listaTimes[i].time+'<td/><td class="gols golsMandante"></td><td class="versus">x<td/><td class="gols golsAdversario"></td><td id="adversario">'+listaTimes[j].time+'<td/><tr/>';
        $('#listaJogos').append(tr);
      }
    }
  }

  gerarGols()
}

function defineVencedor(listaTimes){

  for(var l=0; l<380; l++){
    
    var golsMandante = document.querySelectorAll('#listaJogos tr .golsMandante')[l].innerText;
    var golsAdversario = document.querySelectorAll('#listaJogos tr .golsAdversario')[l].innerText;
    

    // vitorias
    if(parseInt(golsMandante) > parseInt(golsAdversario)){
      var timeMandante = document.querySelectorAll('#mandante')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeMandante == listaTimes[t].time){

          listaTimes[t].vitorias += 1;
          listaTimes[t].pontos += 3;
          listaTimes[t].saldoGols += parseInt(golsMandante);
        }
      }
    }else{
      var timeAdversario = document.querySelectorAll('#adversario')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeAdversario == listaTimes[t].time){

          listaTimes[t].vitorias += 1;
          listaTimes[t].pontos += 3;
          listaTimes[t].saldoGols += parseInt(golsAdversario);
        }
      }
    }

    // derrotas
    if(parseInt(golsMandante) < parseInt(golsAdversario)){
      var timeMandante = document.querySelectorAll('#mandante')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeMandante == listaTimes[t].time){

          listaTimes[t].derrotas += 1;
        }
      }
    }else{
      var timeAdversario = document.querySelectorAll('#adversario')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeAdversario == listaTimes[t].time){

          listaTimes[t].derrotas += 1;
        }
      }
    }

    // empates
    if(parseInt(golsMandante) === parseInt(golsAdversario)){
      var timeMandante = document.querySelectorAll('#mandante')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeMandante == listaTimes[t].time){

          listaTimes[t].empates += 1;
          listaTimes[t].saldoGols += parseInt(golsMandante);
        }
      }
    }else{
      var timeAdversario = document.querySelectorAll('#adversario')[l].innerText;

      for(var t=0; t<20; t++){
        
        if(timeAdversario == listaTimes[t].time){

          listaTimes[t].empates += 1;
          listaTimes[t].saldoGols += parseInt(golsAdversario);
        }
      }
    }
  }
}


function gerarGols(){

  for(var i=0; i<760; i++) {
    var gols = Math.floor(Math.random() * 6);

    var td = document.querySelectorAll('td.gols')[i];
    td.innerText = gols;
  }
}


function criaTabelaClassificacao(listaTimes){

  for (var n=0; n<20; n++) {
    var tr = '<tr>\
    <td>'+listaTimes[n].time+'<td/>\
    <td>'+listaTimes[n].pontos+'<td/>\
    <td>'+listaTimes[n].vitorias+'<td/>\
    <td>'+listaTimes[n].derrotas+'<td/>\
    <td>'+listaTimes[n].saldoGols+'<td/>\
    <td>'+listaTimes[n].empates+'<td/>\
    <tr/>';
    $('#tabela-classificacao').append(tr);
  }
}

function ordenaTabelaPorPontuacao(listaTimes){

  listaTimes.sort(function(a,b) {
    if(a.pontos < b.pontos) return -1;
    if(a.pontos > b.pontos) return 1;
    return 0;
  });

  var listaOrdenada = listaTimes.slice(0).reverse();
  criaTabelaClassificacao(listaOrdenada);
}


$( document ).ready(function() {

  $('#montarCampeonato').click(function(){
    gerarJogos(listaTimes);
    defineVencedor(listaTimes);
    ordenaTabelaPorPontuacao(listaTimes);
  });
});