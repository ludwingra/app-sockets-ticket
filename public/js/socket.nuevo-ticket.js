

// Comando para establecer la comunicación
var socket = io();

socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Desconectado del servidor');
});

// let label = $('#lblNuevoTicket');
// $('button').on('click', function () {
//   socket.emit('nextTicket', null, function (nextTicket) {
//     label.text(nextTicket);
//   });
// })
// let label = document.getElementById('lblNuevoTicket');
// let boton = document.getElementsByTagName("button");
// boton[0].addEventListener("click", function () {
//   socket.emit('nextTicket', null, function (nextTicket) {
//     label.value = nextTicket;
//   });
// });


let label = document.getElementById('lblNuevoTicket');

// Cuando se emita el evento 'estadoActual' va a definir el valor del ticket actual a la etiqueta
socket.on('estadoActual', function (data) {
  label.textContent = data.actual;
})

// Crea un nuevo ticket y Actualizar el valor de la etiqueta
function Ticket() {
  socket.emit('nextTicket', null, function (nextTicket) {
    label.textContent = nextTicket;
  });
}