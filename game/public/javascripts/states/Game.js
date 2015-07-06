(function(window){
  'use strict';

  class Game extends Phaser.State {
    constructor() {
      super();
    }

    create() {
    }

    update() {
      // console.log(this.time.elapsed);
    }
  }

  window.$.states.Game = Game;
})(window);
