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

function randRGB () {
  return 'rgb(' + rand8BitInt() + ',' + rand8BitInt() + ',' + rand8BitInt() + ')';
}

function sampleFrom (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}