document.getElementById("escuchar").addEventListener("click", ()=>{
    escuchar(document.getElementById("texto-salida").value)
} );
function escuchar(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}