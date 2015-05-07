function Bird () {
  this.$element = $("<div class='bird'></div>");
  this.speed = 10;
}

Bird.prototype.render = function () {
  $('body').append(this.$element);
  this.$element.offset({
    top: centerY(this.$element),
    left: centerX(this.$element)
  });
}

Bird.prototype.twitch = function () {
  var y = this.$element.offset().top;
  var x = this.$element.offset().left;
  var dy = randInt(this.speed);
  var dx = randInt(this.speed);
  this.$element.offset({
    top: (y + dy) % $(document).height(),
    left: (x + dx) % $(document).width()
  });
};