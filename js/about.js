/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var bools = [false, false, false, false];
var vidHtml = '<iframe width="533" height="300" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
var vidDiv = document.getElementById("video");

function checkBools(){
  if (bools[0] && bools[1] && bools[2] && bools[3]){
    vidDiv.innerHTML = vidHtml;
    console.log("You found them all!");
    //window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
  }
  else if (bools[0] || bools[1] || bools[2] || bools[3]) {
    console.log("Keep going, try to change all four photos!");
  }
}

function imgChange(id) {
  image = document.getElementById(id)
  var png = "../png/"+id+".JPG";
  var png2 = "../png/";
  var fake = false;

  switch (id){
    case "aish":
      bools[0] = !bools[0];
      fake = bools[0];
      png2 +="aishani.jpg";
      break;
    case "ny":
      bools[1] = !bools[1];
      fake = bools[1];
      png2+="nyah.jpg";
      break;
    case "ak":
      bools[2] = !bools[2];
      fake = bools[2];
      png2+="akshara.jpg";
      break;
    case "lan":
      bools[3] = !bools[3];
      fake = bools[3];
      png2+="lance.jpg";
      break;
  }
  image.src = (fake) ? png : png2 ;
  checkBools();
}
