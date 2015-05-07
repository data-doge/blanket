$(document).ready(function () {
  var bird = new Bird();
  bird.render();
  setInterval(function () {
    bird.twitch();
  }, 10)
});