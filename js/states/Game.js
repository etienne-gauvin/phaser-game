(function(window){
  'use strict';

  window.$.states.Game = class {
    constructor() {
      //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

      this.game;      //  a reference to the currently running game (Phaser.Game)
      this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
      this.camera;    //  a reference to the game camera (Phaser.Camera)
      this.cache;     //  the game cache (Phaser.Cache)
      this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
      this.load;      //  for preloading assets (Phaser.Loader)
      this.math;      //  lots of useful common math operations (Phaser.Math)
      this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
      this.stage;     //  the game stage (Phaser.Stage)
      this.time;      //  the clock (Phaser.Time)
      this.tweens;    //  the tween manager (Phaser.TweenManager)
      this.state;     //  the state manager (Phaser.StateManager)
      this.world;     //  the game world (Phaser.World)
      this.particles; //  the particle manager (Phaser.Particles)
      this.physics;   //  the physics manager (Phaser.Physics)
      this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
    }

    create() {

      console.log("create");

      var canvas = this.game.canvas;

      canvas.requestPointerLock = (
          canvas.requestPointerLock ||
          canvas.mozRequestPointerLock ||
          canvas.webkitRequestPointerLock
      );

      document.addEventListener('pointerlockerror', lockError, false);
      document.addEventListener('mozpointerlockerror', lockError, false);
      document.addEventListener('webkitpointerlockerror', lockError, false);

      function lockError(e) {
        console.log(e);
      }


      canvas.addEventListener('click', function(){
          console.log("CLICK");
          console.log(canvas.requestPointerLock, canvas.requestPointerLock())
      })

    }

    update() {
    }

    quitGame(pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');
    }
  }
})(window);
