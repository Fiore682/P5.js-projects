class SceneEnd extends Scene {
    constructor() {
        super();

        function escena0() {
            world.setScene(0);
        }
        this.botones = [
            new Button(300, 200, 128, 128, world.img_home, escena0)
        ];
    }

    draw() {
        background(255, 255, 0);
        textSize(32);
        text('END', 100, 300);
        imageMode(CENTER);

        for (let b of this.botones) {
            b.draw();
        }
    }

    mouseClicked() {
        for (let b of this.botones) {
            b.clicked();
        }
    }
}