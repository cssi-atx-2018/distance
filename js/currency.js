
//Get current values of currencies from Python
var curr1 = document.getElementById('currency1').textContent;
var curr2 = document.getElementById('currency2').textContent;

//Set values if they aren't empty, so it looks like the same page
if (curr1 != undefined && curr1 != "") {
  document.getElementById("curr1").value = curr1;
}
if (curr2 != undefined && curr2 != ""){
  document.getElementById("curr2").value = curr2;
}

//Switches currencies in dropdown for opposite conversion
function Switch(){
  var first = document.getElementById("curr1").value;
  var second = document.getElementById("curr2").value;
  document.getElementById("curr1").value = second;
  document.getElementById("curr2").value = first;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
