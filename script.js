var btnNo = document.getElementById("btn-no");
var containImages = document.getElementById("image");
var mainText = document.getElementById("status");
var btnYes = document.getElementById("btn-yes");

const images = ["sadcat.jpg", "sadcat_images2.jpg", "cat-sad.gif", "last.jpg"];
const text = [
  "Don do this to me! please click button yes.",
  "Why you click no again?",
  "So sad to see you click no 3 time.",
  "Sorry. Ber you min click tt dg tver mej teh",
];

let i = 0;
let j = 1;
btnNo.addEventListener("click", function () {
  containImages.src = images[i];
  mainText.innerHTML = text[i];
  if (i == 0) {
    btnYes.style.width = "140px";
    btnYes.style.height = "50px";
  } else if (i == 1) {
    btnYes.style.width = "160px";
    btnYes.style.height = "70px";
  } else if (i == 2) {
    btnYes.style.width = "190px";
    btnYes.style.height = "90px";
  }
  j++;
  if (i != 3) i++;
  if (j == 5) btnNo.style.display = "none";

});

btnYes.addEventListener('click', function(){
  containImages.src = 'milk-and-mocha.gif';
  mainText.innerHTML = 'Tos tv nham ey nv IFL tomorrow.';
  btnNo.style.display = 'none';
});
