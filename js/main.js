(function(window){
  'use strict';

  var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game_container');

  game.state.add('Boot', $.states.Boot);
  game.state.add('Preloader', $.states.Preloader);
  game.state.add('MainMenu', $.states.MainMenu);
  game.state.add('Game', $.states.Game);

  //	Now start the Boot state.
  game.state.start('Boot');

})(window);
