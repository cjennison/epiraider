import * as Phaser from "phaser";
import { MainScene } from "../scenes/MainScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1e293b", // Match our surface color
  parent: "phaser-game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }, // No gravity for top-down view
      debug: false,
    },
  },
  scene: [MainScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
};
