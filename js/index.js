var listaTimes = [
 {time:'Flamengo' },
 {time:'Palmeiras' },
 {time:'Santos' },
 {time:'São Paulo' },
 {time:'Internacional' },
 {time:'Corinthians' },
 {time:'Grêmio' },
 {time:'Athletico-PR' },
 {time:'Bahia' },
 {time:'Goiás' },
 {time:'Vasco' },
 {time:'Atlético-MG' },
 {time:'Botafogo' },
 {time:'Fortaleza' },
 {time:'Ceará' },
 {time:'Fluminense' },
 {time:'Cruzeiro' },
 {time:'CSA' },
 {time:'Chapecoense' },
 {time:'Avaí' },
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