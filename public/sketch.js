let socket;


function setup() {
  createCanvas(400, 400);
  background(51);
  
  socket = io.connect('http://localhost:3000');
  
  socket.on('mouse', (data) =>{
	  noStroke();
		fill(0,255,0);
		ellipse(data.x, data.y, 50, 50);
  });
}

function draw(){
	if(mouseIsPressed){
		noStroke();
		fill(255,0,255);
		ellipse(mouseX, mouseY, 50, 50);
		
		socket.emit('mouse', {x: mouseX, y: mouseY});
	}
}
