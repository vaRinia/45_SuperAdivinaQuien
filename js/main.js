//DATOS LIMA
var imgLim;
imgLim = [];
imgLim[0] = {
	nombre : "marge",
	foto : "img/marge.jpg" };
imgLim[1] = {
	nombre: "lisa",
	foto: "img/lisa.jpg" };
//DATOS AREQUIPA
var imgAre;
imgAre = [];
imgAre[0] = {
	nombre : "maggie",
	foto : "img/maggie.jpg" };
imgAre[1] = {
	nombre: "are2",
	foto: "img/are2.jpg" };
//DATOS SANTIAGO
var imgSan;
imgSan = [];
imgSan[0] = {
	nombre : "bellota",
	foto : "img/bellota.jpg" };
imgSan[1] = {
	nombre: "bombon",
	foto: "img/bombon.jpg" };
//DATOS MEXICO
var imgMex;
imgMex = [];
imgMex[0] = {
	nombre : "veronica",
	foto : "img/veronica.jpg" };
imgMex[1] = {
	nombre: "okaidy",
	foto: "img/okaidy.jpg" };
imgMex[2] = {
	nombre : "shantal",
	foto : "img/shantal.jpg" };
imgMex[3] = {
	nombre : "varinia",
	foto : "img/varinia.jpg" };
imgMex[4] = {
	nombre : "karem",
	foto : "img/karem.jpg" };
imgMex[5] = {
	nombre : "adriana",
	foto : "img/adriana.jpg" };
imgMex[6] = {
	nombre : "claudia",
	foto : "img/claudia.jpg" };
imgMex[7] = {
	nombre : "valeria",
	foto : "img/valeria.jpg" };
imgMex[8] = {
	nombre : "montserrat",
	foto : "img/montserrat.jpg" };
imgMex[9] = {
	nombre : "vannia",
	foto : "img/vannia.jpg" };
imgMex[10] = {
	nombre : "carmen",
	foto : "img/carmen.jpg" };
imgMex[11] = {
	nombre : "edith",
	foto : "img/edith.jpg" };
imgMex[12] = {
	nombre : "cristina",
	foto : "img/cristina.jpg" };
/*
var imgMex;
imgMex = [];
imgMex[0] = {
	nombre : "adriana",
	foto : "img/adriana.jpg" };
imgMex[1] = {
	nombre: "alejandra",
	foto: "img/alejandra.jpg" };
imgMex[2] = {
	nombre : "alejandra",
	foto : "img/alejandra2.jpg" };
imgMex[3] = {
	nombre : "berenice",
	foto : "img/berenice.jpg" };
imgMex[4] = {
	nombre : "carmen",
	foto : "img/carmen.jpg" };
imgMex[5] = {
	nombre : "claudia",
	foto : "img/claudia.jpg" };
imgMex[6] = {
	nombre : "cristina",
	foto : "img/cristina.jpg" };
imgMex[7] = {
	nombre : "edith",
	foto : "img/edith.jpg" };
imgMex[8] = {
	nombre : "flor",
	foto : "img/flor.jpg" };
imgMex[9] = {
	nombre : "hassel",
	foto : "img/hassel.jpg" };
imgMex[10] = {
	nombre : "iana",
	foto : "img/iana.jpg" };
imgMex[] = {
	nombre : "irene",
	foto : "img/irene.jpg" };
imgMex[] = {
	nombre : "irma",
	foto : "img/irma.jpg" };
imgMex[] = {
	nombre : "isabel",
	foto : "img/isabel.jpg" };
imgMex[] = {
	nombre : "isolda",
	foto : "img/isolda.jpg" };
imgMex[] = {
	nombre : "jaqueline",
	foto : "img/jaqueline.jpg" };
imgMex[] = {
	nombre : "karem",
	foto : "img/karem.jpg" }
imgMex[] = {
	nombre : "karen",
	foto : "img/karen.jpg" };
imgMex[] = {
	nombre : "liliana",
	foto : "img/liliana.jpg" };
imgMex[] = {
	nombre : "linda",
	foto : "img/linda.jpg" };
imgMex[] = {
	nombre : "lizbeth",
	foto : "img/lizbeth.jpg" };
imgMex[] = {
	nombre : "mariana",
	foto : "img/mariana.jpg" };
imgMex[] = {
	nombre : "mariana",
	foto : "img/mariana2.jpg" };
imgMex[] = {
	nombre : "monica",
	foto : "img/monica.jpg" };
imgMex[] = {
	nombre : "natasha",
	foto : "img/natasha.jpg" };
imgMex[] = {
	nombre : "nayeli",
	foto : "img/nayeli.jpg" };
imgMex[] = {
	nombre : "okaidy",
	foto : "img/okaidy.jpg" };
imgMex[] = {
	nombre : "oliva",
	foto : "img/oliva.jpg" };
imgMex[] = {
	nombre : "oriana",
	foto : "img/oriana.jpg" };
imgMex[] = {
	nombre : "paola",
	foto : "img/paola.jpg" };
imgMex[] = {
	nombre : "paola",
	foto : "img/paola2.jpg" };
imgMex[] = {
	nombre : "sandra",
	foto : "img/sandra.jpg" };
imgMex[] = {
	nombre : "shantal",
	foto : "img/shantal.jpg" };
imgMex[] = {
	nombre : "tania",
	foto : "img/tania.jpg" };
imgMex[] = {
	nombre : "valeria",
	foto : "img/valeria.jpg" };
imgMex[] = {
	nombre : "vannia",
	foto : "img/vannia.jpg" };
imgMex[] = {
	nombre : "varinia",
	foto : "img/varinia.jpg" };
imgMex[] = {
	nombre : "veronica",
	foto : "img/veronica.jpg" };
imgMex[] = {
	nombre : "yaredi",
	foto : "img/yaredi.jpg" };
imgMex[] = {
	nombre : "yasury",
	foto : "img/yasury.jpg" };
imgMex[] = {
	nombre : "yesenia",
	foto : "img/yesenia.jpg" };
imgMex[] = {
	nombre : "",
	foto : "img/.jpg" };
*/
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
	ptsTot = pais.length * 10;
	console.log(pais.length);
	document.getElementById("mostrarInput").style.display = "block";
	//imagen aleatoria
	var i;
	function elegirImagen(min, max) {
		intentos = 0;
		adivinar.value = "";
		document.getElementById("lugNom").innerHTML = ("");
		if (pais.length > 0) {
			document.getElementById("textos").style.display = "none";
			i = Math.floor(Math.random() * pais.length);
			colocarImg.innerHTML = ("<img src=" + pais[i].foto + " class='img-rounded img-responsive'>");
			nom = pais[i].nombre;
			return i;	
		} else {
			puntaje.innerHTML = (pts + "<br> de " + ptsTot);
			puntaje.className = "bg-azul text-center animated animated-infinite rubberBand text-3";
			document.getElementById("quitarfinal").style.display = "none";
			document.getElementById("quitarfinal2").style.display = "none";
			colocarImg.parentNode.className = "col-xs-12 col-sm-7 col-md-7 col-lg-7";
			document.getElementById("mostrarInput").className = "col-xs-12 col-sm-5 col-md-5 col-lg-5 animated animated-hinge bounceIn"
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
			pts += 10;	
			puntaje.className = "bg-verde text-center animated animated-hinge rubberBand";
			puntaje.innerHTML = (pts);
			pais.splice(i,1);
			$("#success").fadeOut(3000,"swing");
			$("#oro").fadeOut(3000,"swing", function() { elegirImagen() });
		} else {
			intentos += 1;
			if (intentos < 3) {
				document.getElementById("textos").style.display = "block";
				document.getElementById("intenta").style.display = "block";
				$("#textos").fadeOut(3000,"linear");
				$("#intenta").fadeOut(3000,"linear");
			} else {			
				document.getElementById("intenta").style.display = "none";
				pts -= 10;
				document.getElementById("textos").style.display = "block";
				document.getElementById("fallo").style.display = "block";
				colocarImg.innerHTML= ("<img src='img/0exclamacion.png' class='img-rounded img-responsive' id='exclamacion'>");
				puntaje.className = "bg-rojo text-center animated animated-hinge rubberBand";
				puntaje.innerHTML = (pts);
				pais.splice(i,1);
				document.getElementById("lugNom").innerHTML = ("¡Es " + nom + "!");
				$("#fallo").fadeOut(3200,"swing");
				$("#exclamacion").fadeOut(3200,"swing", function() { elegirImagen() });
			}	
		}	
	}
};