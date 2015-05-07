function Line () {
  this.$element = $("<div class='line'></div>");
  this.speed = 2;
  this.docHeight = $(document).height();
  this.docWidth = $(document).width();
}

Line.prototype.render = function () {
  $('body').append(this.$element);
  this.$element.css({
    backgroundColor : randRGB()
  });
  this.$element.offset({
    top: centerY(this.$element),
    left: centerX(this.$element),
  });
};

Line.prototype.twitch = function () {
  var y = this.$element.offset().top;
  var x = this.$element.offset().left;
  var dy = randInt(this.speed);
  var dx = randInt(this.speed);
  this.$element.offset({
    top: (y + dy) % this.docHeight,
    left: (x + dx) % this.docWidth
  });
};