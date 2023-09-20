const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

let selectedDot = 0;
let dots = document.querySelector(".dots");
let flecheDroite = document.getElementById("arrow_right");
let flecheGauche = document.getElementById("arrow_left");
let selectedImg = document.querySelector("#banner .banner-img");
let selectedText = document.querySelector("#banner p")

/*                 LOOP FOR DOT CREATION                    */
for (i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot)

  if (i == 0) {
    dot.classList.add("dot_selected")
  }
}

let listDot = document.querySelectorAll(".dot");

/*                   LEFT                        */
flecheGauche.addEventListener("click", () => {

  listDot[selectedDot].classList.remove("dot_selected");
  selectedDot--;

  if (selectedDot < 0) {
    selectedDot = slides.length - 1;
  }

  selectedImg.src = "./assets/images/slideshow/" + slides[selectedDot].image;
  selectedText.innerHTML = slides[selectedDot].tagLine;
  listDot[selectedDot].classList.add("dot_selected");

})
/*                   RIGHT                        */

flecheDroite.addEventListener("click", () => {
  listDot[selectedDot].classList.remove("dot_selected");
  selectedDot++;

  if (selectedDot == slides.length) {
    selectedDot = 0;
  }
  selectedImg.src = "./assets/images/slideshow/" + slides[selectedDot].image;
  selectedText.innerHTML = slides[selectedDot].tagLine;
  listDot[selectedDot].classList.add("dot_selected");

})