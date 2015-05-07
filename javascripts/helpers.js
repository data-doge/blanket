function randInt (range) {
  return (Math.floor((Math.random() * range)) + 1) * (Math.random() > 0.5 ? -1 : 1);
}

function centerY (element) {
  return ($(document).height() - element.height()) / 2;
}

function centerX (element) {
  return ($(document).width() - element.width()) / 2;
}

function rand8BitInt () {
  return Math.floor(Math.random() * 256);
}

function randHex() {
  var hexArray = ["#F2385A","#F5A503","#E9F1DF","#4AD9D9","#36B1BF"];
  return sampleFrom(hexArray);
}

function sampleFrom (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}