// Code Practice: Scrolling States
// Name: Jason Son
// Date: Feb 7 2025

"use strict";

const config = {
  parent: "phaser-game",
  type: Phaser.WEBGL,
  width: 400,
  height: 300,
  pixelArt: true,
  zoom: 2,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [Load, Play],
};

const game = new Phaser.Game(config);
