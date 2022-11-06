function data_priv() {
  document.getElementById('card').style.visibility = "hidden";
  document.getElementById('data').style.visibility = "visible";
}

function tap() {
  document.getElementById('data').style.visibility = "hidden";
  document.getElementById('tap').style.visibility = "visible";
  
}

function omny() {
  document.getElementById('data').style.visibility = "hidden";
  document.getElementById('omny').style.visibility = "visible";
  
}

function microchip() {
  document.getElementById('data').style.visibility = "hidden";
  document.getElementById('microchip').style.visibility = "visible";
  
}

function closediv() {
  document.getElementById('data').style.visibility = "visible";
  document.getElementById('tap').style.visibility = "hidden";
  document.getElementById('omny').style.visibility = "hidden";
  document.getElementById('microchip').style.visibility = "hidden";
}