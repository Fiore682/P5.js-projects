class SceneTwo extends Scene {

    constructor() {
        super();

        function escena2() {
            world.setScene(2);
        }

        function escena4() {
            world.setScene(4);
        }
        this.botones = [
            new Button(100, height - 100, 128, 128, world.img_prev, escena2),
            new Button(width - 100, height - 100, 128, 128, world.img_next, escena4),
        ];
    }

    draw() {
        background(0, 255, 0);
        textSize(22);
        text('MI COMPORTAMIENTO GENERATIVO 2', 100, 300);

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