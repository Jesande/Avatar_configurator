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
  // dont reset???
};

// when click on face1-btn = hide all the faces inside avatar-head-container & show face1
// when click on face1-btn = check if face1Img is hide and delet the class ".hide" & add face2Img and face3Img the class "hide"

// face2Btn.addEventListener("click", face);
// function face() {
//   face1Img.style.display = 'none';
//   face2Img.style.display = 'block';
//   face3Img.style.display = 'none';
//   // reset( {
//   //   return false
//   //  })
// };

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