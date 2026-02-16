import Circle from './Circle.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // Create a simple circular texture programmatically
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(0xffffff, 1);
        graphics.fillCircle(10, 10, 10);
        graphics.generateTexture('circle_texture', 20, 20);
    }

    create() {
        this.circles = this.add.group({
            classType: Circle,
            runChildUpdate: true
        });

        const { width, height } = this.scale;

        // Spawn 64 circles
        for (let i = 0; i < 64; i++) {
            const x = Phaser.Math.Between(50, width - 50);
            const y = Phaser.Math.Between(50, height - 50);
            const circle = new Circle(this, x, y);
            this.circles.add(circle);
        }

        // Enable collision between circles
        this.physics.add.collider(this.circles, this.circles);
    }

    update() {
        // Phaser Group doesn't automatically call update on children unless managed
        // In this case, Bouncer.update is handled if we call it here or use runChildUpdate
    }
}
