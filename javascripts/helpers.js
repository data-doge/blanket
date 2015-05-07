function randInt(range) {
  return (Math.floor((Math.random() * range)) + 1) * (Math.random() > 0.5 ? -1 : 1);
}

function centerY(element) {
  return ($(document).height() - element.height()) / 2;
}

function centerX(element) {
  return ($(document).width() - element.width()) / 2;
}