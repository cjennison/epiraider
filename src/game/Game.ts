import * as Phaser from "phaser";
import { gameConfig } from "./config/GameConfig";

export class Game {
  private game: Phaser.Game | null = null;

  public init(containerId: string): Phaser.Game {
    console.log("Game.init() called with containerId:", containerId);

    // Destroy existing game if it exists
    if (this.game) {
      console.log("Destroying existing game");
      this.game.destroy(true);
    }

    // Update config with the container
    const config = {
      ...gameConfig,
      parent: containerId,
    };

    console.log("Game config:", config);

    // Create and start the game
    console.log("Creating Phaser.Game instance...");
    this.game = new Phaser.Game(config);
    console.log("Phaser.Game created:", this.game);

    return this.game;
  }

  public destroy(): void {
    if (this.game) {
      this.game.destroy(true);
      this.game = null;
    }
  }

  public getGame(): Phaser.Game | null {
    return this.game;
  }

  public restart(): void {
    if (this.game) {
      // Restart the current scene
      const currentScene = this.game.scene.getScene("MainScene");
      if (currentScene) {
        currentScene.scene.restart();
      }
    }
  }

  public pause(): void {
    if (this.game) {
      const currentScene = this.game.scene.getScene("MainScene");
      if (currentScene) {
        if (currentScene.scene.isPaused()) {
          currentScene.scene.resume();
        } else {
          currentScene.scene.pause();
        }
      }
    }
  }
}
