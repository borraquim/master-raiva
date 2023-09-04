
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

block_image_width = 350;
block_image_height = 430;

var blockImageObject= "";



function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:blockY,
		left:blockX
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '114'); // adicione os códigos adequados às teclas
	{
		new_image('rr1.png');
		console.log("r")
	}
	if(keyPressed == '103')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("g");
	}
	
	if(keyPressed == '121')
	{
		blockX =350;
		new_image('yr.png');
		console.log("y");
	}
	if(keyPressed == '112')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '98')
	{
		blockX = 700;
		new_image('br.png');
		console.log("b");
	}
	
}

