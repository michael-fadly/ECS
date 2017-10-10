var txt, button, dropzone;
/*
function preload(){ // setup will not run until preload is done
    txt = loadStrings('sample.txt');
}
*/
function setup(){
    noCanvas(); //specify don't draw anything
    createFileInput(fileSelected);
    button = select('#loadfile');
    button.mousePressed(loadtxt);
    /*
    console.log(txt);
    //createP(txt);
    createP(join(txt,'<br/>'));
    
    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile,unhighlight);
    */
    var canvas = createCanvas(200,200);
    background(200);
    canvas.dragOver(highlight);
    canvas.dragLeave(unhighlight);
    canvas.drop(gotFile,unhighlight);
    
}
function highlight(){
    dropzone.style('background-color','#000000')
}
function unhighlight(){
    dropzone.style('background-color','#ffffff')
}
function gotFile(file){
    createP(file.name);
    createP(file.type);
    createP(file.size);
    var img = createImg(file.data);
    image(img,0,0,200,200);
}
function fileSelected(file){
	console.log(file);
	if (file.type == 'text'){
		createP(file.name);
		createP(file.data);
	}else{
		createP("only text files friend");
	}
}
function loadtxt(){
	
}
