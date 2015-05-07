$(document).ready(function () {

  var lineFactory = new LineFactory();
  lineFactory.generateLines(100);
  lineFactory.renderLines();

  var lines = lineFactory.lines;
  var twitchInterval = setInterval(function () {
    for (var i = 0; i < lines.length; i++) {
      lines[i].twitch();
    }
  }, 50);

});