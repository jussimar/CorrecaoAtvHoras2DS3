// This is a JavaScript file


function preencheHora(){
    var hora = "";
    for(var x = 0; x <= 23; x++){
      if(x <= 9){
        hora+="<option value="+x+">0"+x+"</option>";
      }else{
        hora+="<option value="+x+">"+x+"</option>";
      }
    }
    $("#horaEntrada").html(hora);
    $("#horaSaida").html(hora);
}

function preencheMinuto(){
  var minuto = "";
    for(var x = 0; x <= 59; x++){
      if(x <= 9){
        minuto+="<option value="+x+">0"+x+"</option>";
      }else{
        minuto+="<option value="+x+">"+x+"</option>";
      }
    }
    $("#minutoEntrada").html(minuto);
    $("#minutoSaida").html(minuto);
}

$(document).on("click","#calcular",function(){
  var horaEntrada =parseFloat($("option:selected",("#horaEntrada")).val());
  var horaSaida = parseFloat($("option:selected",("#horaSaida")).val());
  var minutoEntrada =parseFloat($("option:selected",("#minutoEntrada")).val());
  var minutoSaida = parseFloat($("option:selected",("#minutoSaida")).val());
  var valorHora = parseFloat($("option:selected",("#funcao")).val());
  
  var total = ((horaSaida + (minutoSaida/60)) - (horaEntrada + (minutoEntrada/60))) * valorHora;

  $("#resultado").val(total.toFixed(2));
 
});