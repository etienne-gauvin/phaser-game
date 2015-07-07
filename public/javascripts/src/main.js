(function(window){
  'use strict';

  var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game_container');

  game.state.add('Boot', G.states.Boot);
  game.state.add('Preloader', G.states.Preloader);
  game.state.add('MainMenu', G.states.MainMenu);
  game.state.add('Game', G.states.Game);

  //	Now start the Boot state.
  game.state.start('Boot');

  window.G.game = game;
})(window);
