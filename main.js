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

// SHOW FACES
function showFace(event) {
  console.log("#" + event.target.dataset.element + "-img");

  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".face", { opacity: 0, duration:0 });

  let faceToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( faceToShow, { opacity: 1, duration: .15 });
}
  
// SHOW HAIR
function showHair(event) {
  console.log("#" + event.target.dataset.element + "-img");
  
  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".hair", { opacity: 0, duration:0 });
  
  var hairToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( hairToShow, { opacity: 1, duration: .15 });
}

// SHOW EYES
function showEyes(event) {
  console.log("#" + event.target.dataset.element + "-img");

  gsap.to(".reset-img", { opacity: 0, duration:0 });
  gsap.to(".eyes", { opacity: 0, duration:0 });
  
  let eyesToShow = "#" + event.target.dataset.element + "-img";
  gsap.to( eyesToShow, { opacity: 1, duration: .15 });
}
  

document.getElementById('color1-btn').addEventListener('click', colorTheHair);
document.getElementById('color2-btn').addEventListener('click', colorTheHair);
document.getElementById('color3-btn').addEventListener('click', colorTheHair);
document.getElementById('color4-btn').addEventListener('click', colorTheHair);
document.getElementById('color5-btn').addEventListener('click', colorTheHair);
document.getElementById('color6-btn').addEventListener('click', colorTheHair);
document.getElementById('color7-btn').addEventListener('click', colorTheHair);
document.getElementById('color8-btn').addEventListener('click', colorTheHair);


function colorTheHair(event) {
  let colorToUse = event.target.dataset.color;
  //let hairToColor = ???? how to grab the hair that was choosen?
  gsap.to(hairToColor, { fill: colorToUse, duration: .25 });
}