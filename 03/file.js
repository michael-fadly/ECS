var txt;

/*
function preload(){ // setup will not run until preload is done
    txt = loadStrings('sample.txt');
}
*/

function setup(){
    noCanvas(); //specify don't draw anything
    createFileInput();
    button = select('loadfile');
    button.mousePressed(loadtxt);
    /*
    console.log(txt);
    //createP(txt);
    createP(join(txt,'<br/>'));
    */
}

function fileSelected(){
	console.log(file);
}

function loadtxt(){
	
}
