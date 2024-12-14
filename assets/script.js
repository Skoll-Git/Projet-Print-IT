const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Constante utiles.
const arrowLeft = document.querySelector(".arrow_left") //constante bouton flèche gauche.
const arrowRight = document.querySelector(".arrow_right") //constante bouton flèche droite.

// Taille du tableau d'images.
const tSize = slides.length;

// Slide actuelle.
let currentSlide = 0;

// Mise en place du changement de bannière 
let img = document.getElementById('banner-img');
img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);

// Même chose pour le texte correspondant.
let tagline = document.getElementById('tagline');
tagline.innerHTML = slides[currentSlide]["tagLine"];

// Mise en place des Dots.
for(let i = 0; i < tSize; i++){
	if( i == 0){
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot dot_selected"); //le premier point créer aura la classe selectionné.
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot);
	}else{ 
		
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot); // les autres seront sans spécifications.
	}
}

// Mise en place d'une fonction pour le clic flèche gauche.
function flecheGauche() {
	console.log("fleche g")
	if(currentSlide == 0) {
		currentSlide = tSize -1; //back track pour la loop
		img.setAttribute("src" , "./assets/images/slideshow/" + slides[currentSlide]["image"]); //changement de contenu pour la bannière.
		tagline.innerHTML = slides[currentSlide]["tagLine"];//changement du commentaire correspondant à l'image.
		dot = document.getElementById(currentSlide); 
		dot.classList.add("dot_selected"); // ajout de la classe selected au dots prévu.
		oldDot = document.getElementById(0); // retrait de la classe selected pour le précédent dot.	
		oldDot.classList.remove("dot_selected");
	}else{
		currentSlide--; // décalage de -1 logique du au clic flèche gauche.
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]); 
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);// on appele le points correspondant à l'image actuelle afin de lui attribué la classe selected.
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(currentSlide + 1);
		oldDot.classList.remove("dot_selected");
	}
}
//EventListener du clic de la flèche gauche + ajout de la fonction qui se lancera au clic.
arrowLeft.addEventListener('click', flecheGauche);

// Mise en place de la même fonction que poir le clic flèche Gauche dans le sens inverse.
function flecheDroite() {
	console.log("fleche d")
	if(currentSlide == tSize - 1){
		currentSlide = 0;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(tSize - 1);
		oldDot.classList.remove("dot_selected");
	}else{
		currentSlide++;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(currentSlide-1);
		oldDot.classList.remove("dot_selected");
	}
}

arrowRight.addEventListener('click', flecheDroite);