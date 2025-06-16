import * as Phaser from "phaser";
import { Penguin } from "../entities/Penguin";

export class MainScene extends Phaser.Scene {
  private penguin!: Penguin;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    console.log("MainScene: preload() called");

    // Load the actual penguin sprite from file
    this.load.image(Penguin.SPRITE_KEY, Penguin.SPRITE_PATH);

    // Add loading event handlers
    this.load.on("filecomplete-image-" + Penguin.SPRITE_KEY, () => {
      console.log("Penguin sprite loaded successfully!");
    });

    this.load.on("loaderror", (file: { key: string; url: string }) => {
      console.error("Failed to load file:", file.key, "from", file.url);
    });

    console.log("MainScene: penguin sprite loading from", Penguin.SPRITE_PATH);
  }

  create(): void {
    console.log("MainScene: create() called");

    // Set world bounds
    this.physics.world.setBounds(0, 0, 800, 600);

    // Add a background color to make sure scene is visible
    this.cameras.main.setBackgroundColor("#1e293b");

    // Check if penguin sprite loaded, create fallback if not
    if (!this.textures.exists(Penguin.SPRITE_KEY)) {
      console.warn("Penguin sprite not found, creating fallback");
      this.createFallbackPenguinSprite();
    }

    // Create penguin player at center of screen
    console.log("Creating penguin at 400, 300");
    this.penguin = new Penguin(this, 400, 300);
    console.log("Penguin created:", this.penguin);

    // Add some basic UI text
    this.add.text(10, 10, "EpiRaider - Move with WASD or Arrow Keys", {
      fontSize: "16px",
      color: "#ffffff",
    });

    this.add.text(10, 30, "Penguin Practice Mode", {
      fontSize: "14px",
      color: "#64FFDA",
    });

    // Add a test rectangle to make sure rendering works
    const testRect = this.add.rectangle(200, 200, 50, 50, 0xff0000);
    console.log("Test rectangle created:", testRect);
  }

  private createFallbackPenguinSprite(): void {
    // Create a 32x32 orange rectangle as fallback penguin
    const graphics = this.add.graphics();
    graphics.fillStyle(0xff6b35); // Orange color for penguin
    graphics.fillRoundedRect(0, 0, 32, 32, 8);
    graphics.generateTexture(Penguin.SPRITE_KEY, 32, 32);
    graphics.destroy();
    console.log("Fallback penguin sprite created");
  }

  update(): void {
    // Update penguin
    if (this.penguin) {
      this.penguin.update();
    }
  }
}
