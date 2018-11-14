let botao = document.querySelector('#btn1')
let tela1 = document.querySelector('.tela1')
let tela2 = document.querySelector('.tela2')
let botao2 = document.querySelector('#btnV')


botao.onclick = () => {
    tela1.style.display = 'none'
    tela2.style.display = 'flex'
}
botao2.onclick = () =>{
    tela1.style.display = 'flex'
    tela2.style.display = 'none'

}





// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}