function Blanket () {
  this.$element = $("<div class='blanket'></div>");
  this.windowHeight = $(window).height();
}

Blanket.prototype.render = function () {
  $('body').append(this.$element);
};

Blanket.prototype.changeHeightBy = function (percent) {
  var heightPercent = this.$element.height() / this.windowHeight * 100;
  this.$element.height(heightPercent + percent + '%');
};