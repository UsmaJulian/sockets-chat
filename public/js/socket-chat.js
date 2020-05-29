// @ts-ignore
var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    // @ts-ignore
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};


socket.on('connect', function() {
    console.log('Conectado al servidor');
    //ESTABLECER QUE ALGUIEN SE CONECTO
    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados ', resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

//ESCUCHAR CUANDO UN USUARIO ENTRA O SALE DEL CHAT
socket.on('listaPersonas', function(personas) {

    console.log(personas);

});


//EL CLIENTE ESCUCHA MENSAJES PRIVADOS

socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado:', mensaje);
});