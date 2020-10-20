
// Comando para establecer la comunicación
var socket = io();

socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Desconectado del servidor');
});

// Etiquetas Tickets
var lblTicket1 = document.getElementById('lblTicket1');
var lblTicket2 = document.getElementById('lblTicket2');
var lblTicket3 = document.getElementById('lblTicket3');
var lblTicket4 = document.getElementById('lblTicket4');
var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4]; // Arreglo de los Tickets

// Etiquetas Escritorios
var lblEscritorio1 = document.getElementById('lblEscritorio1');
var lblEscritorio2 = document.getElementById('lblEscritorio2');
var lblEscritorio3 = document.getElementById('lblEscritorio3');
var lblEscritorio4 = document.getElementById('lblEscritorio4');
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]; // Arreglo de escritorios

socket.on('estadoActual', function (data) {

  actualizaHtml(data.ultimos4);

})

socket.on('ultimos4', function (data) {

  let audio = new Audio('audio/new-ticket.mp3');
  audio.play();
  actualizaHtml(data.ultimos4);

})

function actualizaHtml(ultimos4) {

  for (let i in ultimos4) {
    lblTickets[i].textContent = `Ticket ${ultimos4[i].numero}`;
    lblEscritorios[i].textContent = `Escritorio ${ultimos4[i].escritorio}`;
  }

}