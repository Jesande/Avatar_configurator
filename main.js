// var btn for shapes
var face0 = document.getElementById('reset-img');
var face1Btn = document.getElementById('btn-face1').addEventListener('click', showShape);
var face2Btn = document.getElementById('btn-face2').addEventListener('click', showShape);
var face3Btn = document.getElementById('btn-face3').addEventListener('click', showShape);
var hair1Btn = document.getElementById('hair1-btn').addEventListener('click', showShape);
var hair2Btn = document.getElementById('hair2-btn').addEventListener('click', showShape);
var hair3Btn = document.getElementById('hair3-btn').addEventListener('click', showShape);
var hair4Btn = document.getElementById('hair4-btn').addEventListener('click', showShape);
var eyes1Btn = document.getElementById('eyes1-btn').addEventListener('click', showShape);
var eyes2Btn = document.getElementById('eyes2-btn').addEventListener('click', showShape);
var eyes3Btn = document.getElementById('eyes3-btn').addEventListener('click', showShape);
var eyes4Btn = document.getElementById('eyes4-btn').addEventListener('click', showShape);

// SHOW SHAPES
function showShape(event) {
  // console.log(event);
  let elementToShow = "#" + event.target.dataset.element + "-img";

  gsap.to('.hide', { opacity: 0, duration: 0});
  gsap.to(face0, { opacity: 0, duration:0 });
  gsap.to(elementToShow, { opacity: 1, duration: .15 });
}
  

var color1Btn = document.getElementById('color1-btn').addEventListener('click', colorTheHair);
var color2Btn = document.getElementById('color2-btn').addEventListener('click', colorTheHair);
var color3Btn = document.getElementById('color3-btn').addEventListener('click', colorTheHair);
var color4Btn = document.getElementById('color4-btn').addEventListener('click', colorTheHair);
var color5Btn = document.getElementById('color5-btn').addEventListener('click', colorTheHair);
var color6Btn = document.getElementById('color6-btn').addEventListener('click', colorTheHair);
var color7Btn = document.getElementById('color7-btn').addEventListener('click', colorTheHair);
var color8Btn = document.getElementById('color8-btn').addEventListener('click', colorTheHair);


function colorTheHair(event) {
  console.log(event.target.dataset.color)

}