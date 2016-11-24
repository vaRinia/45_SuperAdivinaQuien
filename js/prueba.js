//DATOS MEXICO
var imgMex;
imgMex = [];
imgMex[0] = {
	nombre : "veronica",
	foto : "img/veronica.jpg"
};

//DATOS LIMA
var imgLim;
imgLim = [];
imgLim[0] = {
	nombre : "lim1",
	foto : "img/lim1.jpg"
};
imgLim[1] = {
	nombre: "lim2",
	foto: "img/lim2.jpg"
};

//DATOS AREQUIPA
var imgAre;
imgAre = [];
imgAre[0] = {
	nombre : "are1",
	foto : "img/are1.jpg"
};
imgAre[1] = {
	nombre: "are2",
	foto: "img/are2.jpg"
};

//DATOS SANTIAGO
var imgSan;
imgSan = [];
imgSan[0] = {
	nombre : "san1",
	foto : "img/san1.jpg"
};
imgSan[1] = {
	nombre: "san2",
	foto: "img/san2.jpg"
};
// ARREGLO GENERAL
var imgGeneral;
var imgGeneral = [];
imgGeneral[0] = imgMex;
imgGeneral[1] = imgLim;
imgGeneral[2] = imgAre;
imgGeneral[3] = imgSan;
//ELEMENTOS
var inputPais = document.getElementById("pais");
var btnComprobar = document.getElementById("comprobar");
var colocarImg = document.getElementById("lugarfoto");
var puntaje = document.getElementById("puntaje");
var intentos = 0;
var pts = 0;
//FUNCIONES
inputPais.onchange = function() {
	var numPais = inputPais.value;
	var pais = imgGeneral[numPais];
	document.getElementById("mostrarInput").style.display = "block";
	//imagen aleatoria
	var i;
	function elegirImagen(min, max) {
		adivinar.value = "";
		if (pais.length > 0) {
			document.getElementById("textos").style.display = "none";
			i = Math.floor(Math.random() * pais.length);
			colocarImg.innerHTML = ("<img src=" + pais[i].foto + " class='img-rounded img-responsive'>");
			return i;	
		} else {
			document.getElementById("quitarfinal").style.display = "none";
			document.getElementById("quitarfinal2").style.display = "none";
			colocarImg.parentNode.className = "col-xs-12 col-sm-8 col-md-8 col-lg-8";
			document.getElementById("mostrarInput").className = "col-xs-12 col-sm-4 col-md-4 col-lg-4 animated animated-hinge bounceIn"
			colocarImg.innerHTML = ("<img src='img/party1.gif' class='img-rounded img-responsive'>");
			document.getElementById("final").style.display = "block";
		};	
	}
	elegirImagen(); //colocar imagen
	//COMPROBAR INPUT CON NOMBRE
	btnComprobar.onclick = function () {
		var adivinar = document.getElementById("adivinar"); //input nombre
		adivinar.value = adivinar.value.toLowerCase();
		adivinar.value = adivinar.value.trim();
		if (adivinar.value == pais[i].nombre) {
			document.getElementById("textos").style.display = "block";
			document.getElementById("success").style.display = "block";
			colocarImg.innerHTML = ("<img src='img/0oro.png' class='img-rounded img-responsive' id='oro'>");
			pts = pts + 10;	
			puntaje.className = "bg-success text-center animated animated-hinge rubberBand";
			puntaje.innerHTML = (pts);
			pais.splice(i,1);
			$("#success").fadeOut(3000,"swing");
			$("#oro").fadeOut(3000,"swing", function() { elegirImagen() });
		} else {
			intentos = intentos + 1;
			if (intentos < 3) {
				document.getElementById("textos").style.display = "block";
				document.getElementById("intenta").style.display = "block";
				$("#textos").fadeOut(2500,"linear");
				$("#intenta").fadeOut(2500,"linear");

			} else {			
				document.getElementById("intenta").style.display = "none";
				pts = pts - 10;
				document.getElementById("textos").style.display = "block";
				document.getElementById("fallo").style.display = "block";
				colocarImg.innerHTML= ("<img src='img/0exclamacion.png' class='img-rounded img-responsive' id='exclamacion'>");
				puntaje.className = "bg-danger text-center animated animated-hinge rubberBand";
				puntaje.innerHTML = (pts);
				pais.splice(i,1);
				intentos = 0;
				$("#fallo").fadeOut(3000,"swing");
				$("#exclamacion").fadeOut(3000,"swing", function() { elegirImagen() });
			}	
		}	
	}
};








