// FONDO RESPONSIVO

var pantalla = document.querySelector("#canvas");
var H = pantalla.height = 2000;
var W = pantalla.width = 1800;

function inicializarCanvas(){ 
    if (pantalla && pantalla.getContext) {
        var pincel = pantalla.getContext("2d");
        if (pincel) {
            var s = getComputedStyle(pantalla);
            var n = s.width;
            w = pantalla.width = n.split("px")[0]

            var canvasW = pantalla.width = 2000;
            var canvasH = pantalla.height = 1800;

            if(w <= 1024){
                canvasW = pantalla.width = 800;
                canvasH = pantalla.height = 2000;
            }
            
            if(w >= 1024){
                canvasW = pantalla.width = 2000;
                canvasH = pantalla.height = 1800;
            }

            W = canvasW;
            H = canvasH;

            console.log(W)
        }
    }
}

function recargarPag(){
    inicializarCanvas();
}

inicializarCanvas();

addEventListener("resize", recargarPag);



function iniciarMatrix(){
    maxCantidadLetras = Math.ceil(pantalla.height/fondo);

    for ( let i = 0 ; i < pantalla.width/fondo ; ++i ){
        var columna = {};
        columna.x = i*fondo;
        columna.letras = 10+Math.random()*maxCantidadLetras;
        columna.contador = 0;
        columnas.push(columna);

    }    
}    

function letrasRandom(){
    pincel.fillStyle = "rgba( 0 , 0 , 0 , "+desvanecer+" )";
    pincel.fillRect( 0 , 0 , pantalla.width , pantalla.height );

    pincel.font = (fondo-2)+"px DotGothic16";
    pincel.fillStyle = "rgb( 0 , 255 , 0 )";
    for ( let indice = 0 ; indice < columnas.length ; ++indice ){
        var letraRandom = String.fromCharCode( 33+Math.floor(Math.random()*94) );
        pincel.fillText( letraRandom , columnas[indice].x , columnas[indice].contador*fondo+fondo );

        if ( ++columnas[indice].contador >= columnas[indice].letras ){
            columnas[indice].letras = 10+Math.random()*maxCantidadLetras;
            columnas[indice].contador = 0;
        }    
    }    
}    

function cascada(){    
    letrasRandom();
    setTimeout( cascada , 50);
}    