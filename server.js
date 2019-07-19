let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;
let server = app.listen(PORT, () => {
	console.log(`server started at ${PORT}`);
});

app.use(express.static('public'));


let socket = require('socket.io');

let io = socket(server);

io.sockets.on('connection', (sock) => {
	console.log(sock.id);
	
	sock.on('mouse', (data) => {
		//console.log(data);
		sock.broadcast.emit('mouse', data); //do not return to sender
		//io.sockets.emit('mouse', data); //return to sender
	});
});