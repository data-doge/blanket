$(document).ready(function () {

  var lineFactory = new LineFactory();
  lineFactory.generateLines(100);
  lineFactory.renderLines();

  var lines = lineFactory.lines;
  var windSpeed = 0;
  var twitchInterval = setInterval(function () {
    windSpeed ++;
    for (var i = 0; i < lines.length; i++) {
      lines[i].twitch(5);
      lines[i].sway(windSpeed);
    }
  }, 50);

  var blanket = new Blanket();
  blanket.render();
  var blanketHeight = 0;
  var blanketInterval = setInterval(function () {
    if (blanketHeight < 100) {
      blanket.changeHeightBy(0.1);
    } else {
      clearInterval(blanketInterval);
    }
  }, 100);

});