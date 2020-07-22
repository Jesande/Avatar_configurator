// initial animation
var timeline = gsap.timeline();

function fadeIn() {
  timeline.from("header", { y: -40, alpha: 0});
  timeline.from("main", { y: -40, alpha: 0});
  timeline.from("aside", { y: -40, alpha: 0}, 0);
  timeline.from(".animate", { scale: .2, alpha: 0, stagger: .08});
};

fadeIn();

// var btn for shapes
document.getElementById('btn-face1').addEventListener('click', showFace);
document.getElementById('btn-face2').addEventListener('click', showFace);
document.getElementById('btn-face3').addEventListener('click', showFace);
document.getElementById('hair1-btn').addEventListener('click', showHair);
document.getElementById('hair2-btn').addEventListener('click', showHair);
document.getElementById('hair3-btn').addEventListener('click', showHair);
document.getElementById('hair4-btn').addEventListener('click', showHair);
document.getElementById('eyes1-btn').addEventListener('click', showEyes);
document.getElementById('eyes2-btn').addEventListener('click', showEyes);
document.getElementById('eyes3-btn').addEventListener('click', showEyes);
document.getElementById('eyes4-btn').addEventListener('click', showEyes);

let lastFaceButtonClicked = document.getElementById('btn-face1');
let lastHairButtonClicked = document.getElementById('hair1-btn');
let lastEyesButtonClicked = document.getElementById('eyes1-btn');

// SHOW FACES
function showFace(event) {
  console.log("#" + event.target.dataset.element + "-img");
  
  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".face", { opacity: 0, duration:0 });
  
  let faceToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( faceToShow, { opacity: 1, duration: .15 });
  
  if (lastFaceButtonClicked) {
    lastFaceButtonClicked.classList.remove('active');
  }
  event.target.classList.add('active');
  lastFaceButtonClicked = event.target;
}
  
// SHOW HAIR
function showHair(event) {
  console.log("#" + event.target.dataset.element + "-img");
  
  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".hair", { opacity: 0, duration:0 });
  
  var hairToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( hairToShow, { opacity: 1, duration: .15 });

  if (lastHairButtonClicked) {
    lastHairButtonClicked.classList.remove('active');
  }
  event.target.classList.add('active');
  lastHairButtonClicked = event.target;
}

// SHOW EYES
function showEyes(event) {
  console.log("#" + event.target.dataset.element + "-img");

  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".eyes", { opacity: 0, duration:0 });
  
  let eyesToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( eyesToShow, { opacity: 1, duration: .15 });

  if (lastEyesButtonClicked) {
    lastEyesButtonClicked.classList.remove('active');
  }
  event.target.classList.add('active');
  lastEyesButtonClicked = event.target;
}
  

// var btn for colors
document.getElementById('color1-btn').addEventListener('click', colorTheHair);
document.getElementById('color2-btn').addEventListener('click', colorTheHair);
document.getElementById('color3-btn').addEventListener('click', colorTheHair);
document.getElementById('color4-btn').addEventListener('click', colorTheHair);
document.getElementById('color5-btn').addEventListener('click', colorTheHair);
document.getElementById('color6-btn').addEventListener('click', colorTheHair);
document.getElementById('color7-btn').addEventListener('click', colorTheHair);
document.getElementById('color8-btn').addEventListener('click', colorTheHair);

let lastColorButtonClicked = document.getElementById('color1-btn');

// COLOR THE HAIR
function colorTheHair(event) {
  console.log("#" + event.target.dataset.color);

  let colorToUse = event.target.dataset.color;
  gsap.to(".hair", { fill: colorToUse, duration: .25 });
  if (lastColorButtonClicked) {
    lastColorButtonClicked.classList.remove('color-active');
  }
  event.target.classList.add('color-active');
  lastColorButtonClicked = event.target;
}

// RESET AVATAR

document.getElementById('reset-btn').addEventListener('click', reset);

function reset() {
  console.log("start over");
  gsap.to(".face", { opacity:0, duration: .25 });
  gsap.to(".hair", { opacity:0, duration: .25, delay:.15 });
  gsap.to(".eyes", { opacity:0, duration: .25, delay:.25  });
  gsap.to(".reset-img", { opacity: .2, duration:.35, delay:.35 });
}