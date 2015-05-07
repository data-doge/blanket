function Bird () {
  this.$element = $("<div class='bird'></div>");
}

Bird.prototype.render = function () {
  $('body').append(this.$element);
  var centerY = ($(document).height() - this.$element.height()) / 2;
  var centerX = ($(document).width() - this.$element.width()) / 2;
  this.$element.offset({
    top: centerY,
    left: centerX
  });
}

Bird.prototype.move = function () {
};