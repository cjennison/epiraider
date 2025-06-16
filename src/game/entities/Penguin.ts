import * as Phaser from "phaser";

export class Penguin extends Phaser.Physics.Arcade.Sprite {
  // Sprite configuration
  public static readonly SPRITE_KEY = "penguin";
  public static readonly SPRITE_PATH = "/sprites/penguin.png";
  public static readonly SPRITE_SCALE = 0.15; // Scale down to 15% of original size

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  private wasdKeys!: {
    W: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };
  private speed: number = 200;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Penguin.SPRITE_KEY);

    // Scale the sprite
    this.setScale(Penguin.SPRITE_SCALE);

    // Add to scene and enable physics
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set up collision detection
    this.setCollideWorldBounds(true);

    // Initialize input
    this.setupInput();
  }

  private setupInput(): void {
    // Set up cursor keys (arrow keys)
    this.cursors = this.scene.input.keyboard?.createCursorKeys();

    // Set up WASD keys
    const keys = this.scene.input.keyboard?.addKeys("W,S,A,D") as {
      W: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
    this.wasdKeys = keys;
  }

  update(): void {
    if (!this.body) return;

    // Reset velocity
    this.setVelocity(0);

    // WASD controls
    if (this.wasdKeys.W.isDown || this.cursors?.up.isDown) {
      this.setVelocityY(-this.speed);
    } else if (this.wasdKeys.S.isDown || this.cursors?.down.isDown) {
      this.setVelocityY(this.speed);
    }

    if (this.wasdKeys.A.isDown || this.cursors?.left.isDown) {
      this.setVelocityX(-this.speed);
    } else if (this.wasdKeys.D.isDown || this.cursors?.right.isDown) {
      this.setVelocityX(this.speed);
    }

    // Normalize diagonal movement
    if (this.body.velocity.x !== 0 && this.body.velocity.y !== 0) {
      this.setVelocity(
        this.body.velocity.x * Math.cos(Math.PI / 4),
        this.body.velocity.y * Math.cos(Math.PI / 4)
      );
    }
  }

  // Method to set penguin position (useful for resets)
  public setPosition(x: number, y: number): this {
    super.setPosition(x, y);
    return this;
  }

  // Method to change penguin scale
  public setPenguinScale(scale: number): this {
    this.setScale(scale);
    return this;
  }

  // Get current scale
  public getPenguinScale(): number {
    return this.scaleX; // Assuming uniform scaling
  }
}
