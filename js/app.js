//Problema: Las imagenes llevan a un punto muerto,  eso es mala UX
//Solucion: Crear una capa extra con imagenes de mayor tamano. Lightbox

//2. Agregar Overlay Lightbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 Un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);


//1. Usuario da clic en un link que rodea la imagen. Capturar el evento
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");

	//1.1. Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});


//1.2. Obtener el elemento alt para mostrar el texto.


//3. Cuando se da click al overlay
//3.1 Esconder el ovelay
$overlay.click(function(){
	$overlay.hide();
});

/***********Menu Para Moviles***************/
//Problema: El menu no funciona tan bien para moviles.
//Solucion: Cambiar por una navegacion lateral mas util

//Creemos el menu lateral y aguemoslo al menu (nav)
var $select = $("<select></select>");
$("#menu").append($select);

//Recorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
	//Crear una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");
	//Optener cada valor de la opcion del attributo href
	$option.val($anchor.attr("href"));
	//Obtener el text de cada opcion
	$option.text($anchor.text());
	//Agregar la opcion al select	
	$select.append($option);

	//Agregar la clase selected a cada opcion que indique la pagina actual
	//Obtener si el link es la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected", true);
	}
});

//Queremos que se cambie la pagina al cambiar el elemento seleccionado
//Necesitamos usar el evento change
$select.change(function(){
	window.location = $select.val(); //Toma el valor de la opcion seleccionada
});


//Modificar CSS para esconder los links en resoluciones pequenas (width). Mostrar el Select y los botones.
//CSS debe esconder el select en resoluciones pequenas (width)

//INFORMACION DE LOS LOCALES
var html="";
var local1 =
{
	ciudad:"Playas",numSalas: 5, direccion:"Av. Malecon y Paquisha"
};
var local2 =
{
	ciudad:"Santa Elena",numSalas: 8, direccion:"Vía al Tablazo"
};
var local3 =
{
	ciudad:"Guayaquil",numSalas: 15, direccion:"Vía Samborondón"
};

var local =[];
local.push(local1);local.push(local2);local.push(local3);




for (var i=0; i < local.length; i ++)
{
listHTML = '<ul><li>' + local[i].ciudad + '<br>'+local[i].numSalas+ '<br>'+local[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-locales"); 
				infoDiv.innerHTML+=listHTML;
			}


//INFORMACION DE LA CARTELERA
var html="";
var peli1 =
{
	Nompel:"El ángel de la Muerte", director: "Tom Harper", genero:"Terror", sinopsis:"he Woman in Black: Angel of Death (también conocida como The Woman in Black 2: Angel of Death) es una película de 2015, dirigida por Tom Harper y escrita por Jon Croker de la historia de Susan Hill.1 Es la secuela de la película del 2012, The Woman in Black, y es producida por Hammer Film Productions y Entertainment One. El primer tráiler para la película se estrenó en octubre de 2014."
};
var peli2 =
{
	Nompel:"La noche de las bestias", director: "James de Monaco", genero:"Terror", sinopsis:"The Purge (The Purge: La noche de las bestias en España, La noche de la expiación en México y La purga en Hispanoamérica) es una película estadounidense del año 2013 escrita y dirigida por James DeMonaco. Está protagonizada por Ethan Hawke, Lena Headey, Max Burkholder, Adelaide Kane, Edwin Hodge, Tony Oller, Rhys Wakefield y Arija Bareikis."
};
var peli3 =
{
	Nompel:"Midnight Tides", director: "Steve Erikson", genero:"Terror", sinopsis:"Midnight Tides is the fifth volume of Canadian author Steven Erikson's epic fantasy series, the Malazan Book of the Fallen.[1] Although it is part of the larger series, it has only limited references to the previous books.[2] However, it is not a stand-alone volume as the events of the books Reaper's Gale and Dust of Dreams follow on from it."
};
var peli4 =
{
	Nompel:"Tonto y retonto 2", director: "Peter Farrelli", genero:"Humor", sinopsis:"es una comedia estadounidense de 1994. Fue dirigida por los hermanos Farrelly, que escribieron el guion junto a su amigo Bennett Yellin, y tiene por protagonistas a Jim Carrey y a Jeff Daniels. En 2003 se rodó una precuela dirigida por Troy Miller titulada Dumb and Dumberer: When Harry Met Lloyd, y en 2014 una secuela, dirigida nuevamente por los hermanos Farrelly, con el título Dumb and Dumber To."
};
var peli5 =
{
	Nompel:"DBZ - La resurreccion de Freezer", director: "Tadayoshi Yamamuro", genero:"Manga", sinopsis:"Dragon Ball Z: Fukkatsu no 「F」 es la decimonovena película de la franquicia Dragon Ball, la decimoquinta de Dragon Ball Z y la secuela de Dragon Ball Z: La batalla de los dioses. Estrenada el 18 de abril del 2015 en los cines japoneses."
};

var peli =[];
peli.push(peli1);peli.push(peli2);peli.push(peli3);push(peli4);push(peli5);


for (var x=0; x < local.length; x ++)
{
listHTML = '<ul><li>' + peli[x].Nompel + '<br>'+peli[x].director+ '<br>'+peli[x].genero+ '<br>' +peli[x].sinopsis+ '<br>' + ' </li></ul>';
				var infoDiv = document.getElementById("info-peliculas"); 
				infoDiv.innerHTML+=listHTML;
			}