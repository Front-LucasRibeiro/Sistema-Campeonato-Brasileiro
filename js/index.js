var listaTimes = [
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg',time:'Flamengo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0},
  {imagem:'https://s.glbimg.com/es/sde/f/equipes/2019/07/07/palmeiras.svg',time:'Palmeiras', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/santos.svg',time:'Santos', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg',time:'São Paulo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/internacional.svg',time:'Internacional', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians.svg',time:'Corinthians', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/gremio.svg',time:'Grêmio', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2019/09/09/Athletico-PR.svg',time:'Athletico-PR', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/bahia.svg',time:'Bahia', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2019/05/01/Goias_SVG.svg',time:'Goiás', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/vasco.svg',time:'Vasco', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/10/atletico-mg.svg',time:'Atlético-MG', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2019/02/04/botafogo-svg.svg',time:'Botafogo', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/06/10/optimised.svg',time:'Fortaleza', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2019/10/10/ceara.svg',time:'Ceará', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/fluminense.svg',time:'Fluminense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/cruzeiro.svg',time:'Cruzeiro', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/csa.svg',time:'CSA', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/chapecoense.svg',time:'Chapecoense', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
  {imagem:'https://s.glbimg.com/es/sde/f/organizacoes/2018/09/04/avai-futebol-clube.svg',time:'Avaí', pontos:0, vitorias: 0, derrotas:0, saldoGols: 0, empates:0 },
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
    <td><img width="30" heigth="30" src="'+listaTimes[n].imagem+'"/><td/>\
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
    if(a.saldoGols < b.saldoGols) return -1;
    if(a.saldoGols > b.saldoGols) return 1;
    if(a.vitorias < b.vitorias) return -1;
    if(a.vitorias > b.vitorias) return 1;
    return 0;
  });

  var listaOrdenada = listaTimes.slice(0).reverse();
  criaTabelaClassificacao(listaOrdenada);
}


$( document ).ready(function() {
  $('#limpar').click(function(){
    location.reload();
  });

  $('#montarCampeonato').click(function(){
    gerarJogos(listaTimes);
    defineVencedor(listaTimes);
    ordenaTabelaPorPontuacao(listaTimes);
  });
});