export default class Bouncer extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        // Add to scene and enable physics
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Default bouncing behavior
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);
        
        // Random initial velocity
        const speed = 200;
        const angle = Phaser.Math.Between(0, 360);
        const velocity = scene.physics.velocityFromAngle(angle, speed);
        this.setVelocity(velocity.x, velocity.y);
    }

    // Encapsulated behavior can be added here
    update() {
        // Any frame-by-frame behavior for all bouncers
    }
}
