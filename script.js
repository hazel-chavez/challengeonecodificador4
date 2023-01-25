
function encriptar(){
    var texto = document.querySelector('#area-texto').value;/*texto que ingresa el usuario*/
    var encriptarTexto = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");/*claves para encriptar*/
    document.querySelector('.mensaje-text').value = encriptarTexto;
    document.querySelector('#area-texto').value;
    document.getElementById('area-texto').value = '';
}

function desencriptar(){
    var texto = document.querySelector('#area-texto').value;
    var desencriptarTexto = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.querySelector('.mensaje-text').value = desencriptarTexto;
    document.querySelector('#area-texto').value;

}

function copiar(){
  var text = document.getElementById('mensaje-text').value;

  navigator.clipboard.writeText(text)
  .then(() => {
    console.log('texto copiado');
  })
 .catch(err => {
   console.log('Error al copiar texto ', err);
 });
}