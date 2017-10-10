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
    */
    
    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(highlight);
}

function highlight(){
    dropzone.style('background-color','#fff')
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
