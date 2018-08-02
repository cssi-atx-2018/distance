/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
  var checkBox = document.getElementById("kidsbox");
  var kids = document.getElementById("kids");

  if (checkBox.checked == true){
    kids.style.display = "block";
  } else {
    kids.style.display = "none";
  }
}

function myFunction1() {
  var checkBox = document.getElementById("medbox");
  var meds = document.getElementById("meds");

  if (checkBox.checked == true){
    meds.style.display = "block";
  } else {
    meds.style.display = "none";
  }
}

function myFunction2() {
  var checkBox = document.getElementById("coldbox");
  var winter = document.getElementById("winter");

  if (checkBox.checked == true){
    winter.style.display = "block";
  } else {
    winter.style.display = "none";
  }
}

function myFunction3() {
  var checkBox = document.getElementById("warmbox");
  var summer = document.getElementById("summer");

  if (checkBox.checked == true){
    summer.style.display = "block";
  } else {
    summer.style.display = "none";
  }
}
