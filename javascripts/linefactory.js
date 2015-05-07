function LineFactory () {
  this.lines = [];
}

LineFactory.prototype.generateLines = function (amount) {
  for (var i = 0; i < amount; i++) {
    this.lines.push(new Line());
  }
};

LineFactory.prototype.renderLines = function () {
  for (var i = 0; i < this.lines.length; i++) {
    this.lines[i].render();
  }
};