(function(window){
  'use strict';

  class Boot extends Phaser.State {
    constructor(game) {
      super(game);
    }

    init() {
      this.input.maxPointers = 1;
      this.stage.disableVisibilityChange = false;

      if (this.game.device.desktop) {
        //  If you have any desktop specific settings, they can go in here
        this.scale.pageAlignHorizontally = true;
      }
      else {
        this.scale.forceLandscape = true;
        this.scale.pageAlignHorizontally = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(
            480, 260,
            800, 400
        );
      }
    }

    preload() {
      //  Here we load the assets required for our preloader (in this case a background and a loading bar)
      // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
      // this.load.image('preloaderBar', 'images/preloadr_bar.png');
    }

    create() {
      //  By this point the preloader assets have loaded to the cache, we've set the game settings
      //  So now let's start the real preloader going
      this.state.start('Preloader');
    }
  }

  window.$.states.Boot = Boot;
})(window);
