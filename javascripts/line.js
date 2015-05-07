function Line () {
  this.$element = $("<div class='line'></div>");
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

Line.prototype.twitch = function (amount) {
  var y = this.$element.offset().top;
  var x = this.$element.offset().left;
  var dy = randInt(amount);
  var dx = randInt(amount);
  this.$element.offset({
    top: (y + dy) % this.docHeight,
    left: (x + dx) % this.docWidth
  });
};

Line.prototype.sway = function (dx) {
  var x = this.$element.offset().left;
  this.$element.offset({
    left: (x + dx) % this.docWidth
  });
};