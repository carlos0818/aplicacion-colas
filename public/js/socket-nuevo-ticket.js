// Comando para establecer la conexión
var socket = io();

socket.on('connect', function() {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
	console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp){
	console.log(resp);
	$('#lblNuevoTicket').text(resp.actual);
});

$('button').on('click', function(){
	socket.emit('siguienteTicket', null, function(siguienteTicket){
		$('#lblNuevoTicket').text(siguienteTicket);
	});
});