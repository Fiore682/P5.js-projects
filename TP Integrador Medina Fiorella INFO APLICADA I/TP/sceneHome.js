class SceneHome extends Scene {
    PALETTE = {
        PINK: "#e63946",
        WHITE: "#f1faee",
        BLACK: "#44473f",
        LIGHTBLUE: "#a8dadc",
        BLUE: "#457b9d",
        DARKBLUE: "#1d3557",
    };

    constructor() {
        super();

        function escena1() {
            world.setScene(2);
            world.currentScene.inicializar();
        }

        function escenaNav() {
            world.setScene(1);
        }

        this.botones = [
            new Button(width / 2, height / 2, 128, 128, world.img_start, escena1),
            new Button(width / 2, (height / 2) + height / 3, 128, 128, world.img_nav, escenaNav),
        ];
    }

    draw() {
        //funcion para saber las coordenadas del cursor
        // console.log("x:" + mouseX + "y:" + mouseY);

        background(this.PALETTE.WHITE);
        push();
        noStroke();
        fill(this.PALETTE.BLUE);
        rect(30, 30, width - 55, height - 55, 30);
        pop();

        textSize(32);
        fill(this.PALETTE.WHITE);
        textAlign(CENTER);
        text("~     HOME     ~", width / 2, height / 2 - 70);
        text("~ NAVEGA POR LAS OBRAS ~", width / 2 + width / 5, (height / 2) + height / 3);

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