// ARREGLO FOTOS
var imgMex;
imgMex = [];
imgMex[0] = {
	nombre : "veronica",
	foto : "img/veronica.jpg"
};
imgMex[1] = {
	nombre: "okaidy",
	foto: "img/okaidy.jpg"
};
imgMex[2] = {
	nombre : "shantal",
	foto : "img/shantal.jpg"
};
//ELEMENTOS
var numPais = document.getElementById("pais").selectedIndex;
var adivinar = document.getElementById("adivinar").value; //input nombre
var btnComprobar = document.getElementById("comprobar");
var colocarImg = document.getElementById("lugarfoto");

//función aleatoria
var i;
function elegirImagen() {
	i = Math.floor(2 * Math.random() + 1);
	return i;
}
//SELECCIONAR PAIS ---- ???????????
/*btnMex.onclick = function() {
	elegirImagen()
	console.log(i);
	colocarImg.innerHTML= ("<img src=" + imgMex[i].foto + " style = 'width:100%'>");
}*/

//COMPROBAR INPUT CON NOMBRE
btnComprobar.onclick = function () {
	adivinar.toLowerCase();
	adivinar.trim();
	if (adivinar == )
}

// FUNCIONES
var pais;
btnMex.onclick = function() {
	pais = 1;
	iniciar();
}
btnLim.onclick = function() {
	pais = 2;
	iniciar();
}
btnAre.onclick = function() {
	pais = 3;
	iniciar();
}
btnSan.onclick = function() {
	pais = 4;
	iniciar();
}

function iniciar() {
	elegirImagen();

}



