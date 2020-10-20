
// Comando para establecer la comunicación
var socket = io();


var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
let etiEscritorio = document.getElementById('escritorio');
etiEscritorio.textContent = `Escritorio ${escritorio}`;

let label = document.getElementById('numTicket');
function ticketAtiende() {

  socket.emit('atenderTicket', { escritorio: escritorio }, function (resp) {
    if (resp == 'No hay tickets') {
      label.style.color = 'red'
      label.textContent = resp;
      alert(resp);
      return;
    }
    label.textContent = `Ticket ${resp.numero}`;
  });

}