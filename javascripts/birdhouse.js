function BirdHouse () {
  this.birds = [];
}

BirdHouse.prototype.generateBirds = function (amount) {
  for (var i = 0; i < amount; i++) {
    this.birds.push(new Bird());
  }
};

BirdHouse.prototype.renderBirds = function () {
  for (var i = 0; i < this.birds.length; i++) {
    this.birds[i].render();
  }
};