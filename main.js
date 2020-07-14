var face2Btn = document.getElementById("face2-btn");
var face2Img = document.getElementById("face2-img");
var face1Img = document.getElementById("face1-img");
var face3Img = document.getElementById("face3-img");

function reset() {
  face1Img.style.display = 'block';
  face2Img.style.display = 'none';
  face3Img.style.display = 'none';
};

reset();

face2Btn.addEventListener("click", face);
function face() {
  face1Img.style.display = 'none';
  face2Img.style.display = 'block';
  face3Img.style.display = 'none';
  // reset( {
  //   return false
  //  })
};

// face2Btn.addEventListener("click", faceSquare);
// function faceSquare() {
//   face1Img.style.display = 'none';
//   face2Img.style.display = 'block';
//   face3Img.style.display = 'none';
// };
// face2Btn.addEventListener("click", faceTriangle);
// function faceTriangle() {
//   face1Img.style.display = 'none';
//   face2Img.style.display = 'block';
//   face3Img.style.display = 'none';
// };