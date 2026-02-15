
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

function preload() {
    // No assets to preload, we will use graphics
}

function create() {
    const circleCount = 64;
    const circleRadius = 10;

    // Create a graphics object to generate a texture for the circle
    this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
        this.physics.world.setBounds(0, 0, gameSize.width, gameSize.height);
    });

    const graphics = this.make.graphics({ x: 0, y: 0, add: false });
    graphics.fillStyle(0xffffff, 1);
    graphics.fillCircle(circleRadius, circleRadius, circleRadius);
    graphics.generateTexture('circle', circleRadius * 2, circleRadius * 2);

    for (let i = 0; i < circleCount; i++) {
        const x = Phaser.Math.Between(circleRadius, this.scale.width - circleRadius);
        const y = Phaser.Math.Between(circleRadius, this.scale.height - circleRadius);

        const circle = this.physics.add.image(x, y, 'circle');

        // Random velocity
        const speed = 200;
        const angle = Phaser.Math.Between(0, 360);
        const velX = Math.cos(angle * Math.PI / 180) * speed;
        const velY = Math.sin(angle * Math.PI / 180) * speed;

        circle.setVelocity(velX, velY);
        circle.setCollideWorldBounds(true);
        circle.setBounce(1, 1);

        // Random tint for visual variety
        circle.setTint(Phaser.Math.Between(0, 0xffffff));
    }
}

function update() {
    // Physics engine handles movement and collision
}
