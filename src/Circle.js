import Bouncer from './Bouncer.js';

export default class Circle extends Bouncer {
    constructor(scene, x, y) {
        // We'll use a graphics-generated texture for the circle
        super(scene, x, y, 'circle_texture');

        // Specific circle properties
        this.setCircle(this.width / 2);

        // Randomize color/tint
        const color = Phaser.Display.Color.RandomRGB();
        this.setTint(color.color);
    }
}
