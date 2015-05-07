$(document).ready(function () {
  var birdHouse = new BirdHouse();
  birdHouse.generateBirds(100);
  birdHouse.renderBirds();
  var birds = birdHouse.birds;
  var birdInterval = setInterval(function () {
    for (var i = 0; birds.length; i++) {
      birds[i].twitch();
    }
  },10);
});