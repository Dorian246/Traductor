
    

function traducir() {
   
  var textoEntrada = document.getElementById("texto-entrada").value;
  var idiomaEntrada = document.getElementById("idioma-entrada").value;
  var idiomaSalida = document.getElementById("idioma-salida").value;
  var textoSalida = document.getElementById("texto-salida");

  
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
            + idiomaEntrada + "&tl=" + idiomaSalida + "&dt=t&q=" + encodeURI(textoEntrada);

 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      var textoTraducido = data[0][0][0];

      
      textoSalida.value = textoTraducido;
    })
    .catch(error => console.error(error));
}

