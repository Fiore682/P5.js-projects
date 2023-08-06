class SceneTwo extends Scene {

    constructor() {
        super();
        this.init = true;
        this.mostrandoSliders = false;
        this.todosLosSliders = [];

        let escena2 = () => {
            world.setScene(2);
            this.ocultarElementos();
        };

        let escena4 = () => {
            world.setScene(4);
            this.ocultarElementos();
        };

        let ambientSoundPlaying = () => {
            if (!world.ambientSound.isPlaying()) {
                world.ambientSound.play();
            } else {
                world.ambientSound.pause();
            }
        }

        let grabarGif = () => {
            saveGif('miMandala.gif', 2.5); // guarda un gif de la escena que dura 2.5 seg
        }

        this.botones = [
            new Button(width / 4, height - height / 8, 128, 128, world.img_prev, escena2),
            new Button(width - width / 4.5, height - height / 8, 128, 128, world.img_next, escena4),
            new Button(width - width / 12, height / 8, 128, 128, world.reproducir, ambientSoundPlaying),
            new Button(width - width / 13, height / 2, 128, 128, world.grabar, grabarGif),
        ];
    }

    inicializarSliders() {
        this.s1 = createSlider(1, 10, 5, 1).position(20, height / 20);
        this.p1 = createP("Numero de elementos").position(20, height / 20 - height / 18);
        this.todosLosSliders.push(this.s1);
        this.todosLosSliders.push(this.p1);

        this.s2 = createSlider(1, 8, 5, 1).position(20, height / 8);
        this.p2 = createP("Cantidad de partes").position(20, height / 8 - height / 18);
        this.todosLosSliders.push(this.s2);
        this.todosLosSliders.push(this.p2);

        this.s3 = createSlider(3, 30, 3, 3).position(20, height / 5);
        this.p3 = createP("Cantidad de angulos").position(20, height / 5 - height / 18);
        this.todosLosSliders.push(this.s3);
        this.todosLosSliders.push(this.p3);

        this.s4 = createSlider(50, 300, 100, 10).position(20, height / 3.6);
        this.p4 = createP("Radio minimo").position(20, height / 3.6 - height / 18);
        this.todosLosSliders.push(this.s4);
        this.todosLosSliders.push(this.p4);

        this.s5 = createSlider(50, 300, 200, 10).position(20, height / 2.8);
        this.p5 = createP("Radio maximo").position(20, height / 2.8 - height / 18);
        this.todosLosSliders.push(this.s5);
        this.todosLosSliders.push(this.p5);

        this.s6 = createSlider(0.1, 1, 0.1, 0.05).position(20, height / 2.3);
        this.p6 = createP("Velocidad de rotacion").position(20, height / 2.3 - height / 18);
        this.todosLosSliders.push(this.s6);
        this.todosLosSliders.push(this.p6);

        this.redSlider = createSlider(0, 255, 100).position(20, height / 2);
        this.redP = createP("Rojo del Mandala").position(20, height / 2 - height / 18);
        this.todosLosSliders.push(this.redSlider);
        this.todosLosSliders.push(this.redP);

        this.greenSlider = createSlider(0, 255, 150).position(20, height / 1.8);
        this.greenP = createP("Verde del Mandala").position(20, height / 1.8 - height / 18);
        this.todosLosSliders.push(this.greenSlider);
        this.todosLosSliders.push(this.greenP);

        this.blueSlider = createSlider(0, 255, 100).position(20, height / 1.6);
        this.blueP = createP("Azul del Mandala").position(20, height / 1.6 - height / 18);
        this.todosLosSliders.push(this.blueSlider);
        this.todosLosSliders.push(this.blueP);

        this.backgroundRed = createSlider(0, 255, 100).position(20, height / 1.4);
        this.backgroundR = createP("Rojo del Fondo").position(20, height / 1.4 - height / 18);
        this.todosLosSliders.push(this.backgroundRed);
        this.todosLosSliders.push(this.backgroundR);

        this.backgroundGreen = createSlider(0, 255, 150).position(20, height / 1.3);
        this.backgroundG = createP("Verde del Fondo").position(20, height / 1.3 - height / 18);
        this.todosLosSliders.push(this.backgroundGreen);
        this.todosLosSliders.push(this.backgroundG);

        this.backgroundBlue = createSlider(0, 255, 200).position(20, height / 1.2);
        this.backgroundB = createP("Azul del Fondo").position(20, height / 1.2 - height / 18);
        this.todosLosSliders.push(this.backgroundBlue);
        this.todosLosSliders.push(this.backgroundB);

        this.init = false;
        this.mostrandoSliders = true;
    }

    mostrarElementos() {
        for (let e of this.todosLosSliders) {
            e.show()
        }
        this.mostrandoSliders = true;
    }

    ocultarElementos() {
        for (let e of this.todosLosSliders) {
            e.hide()
        }
        this.mostrandoSliders = false;
    }

    draw() {

        if (this.init) this.inicializarSliders(); // crea sliders
        if (!this.mostrandoSliders) this.mostrarElementos(); // muestra sliders  

        let backgroundRed = this.backgroundRed.value();
        let backgroundGreen = this.backgroundGreen.value();
        let backgroundBlue = this.backgroundBlue.value();

        background(backgroundRed, backgroundGreen, backgroundBlue);

        let r = this.redSlider.value();
        let g = this.greenSlider.value();
        let b = this.blueSlider.value();

        stroke(r, g, b);

        // copia el contenido del lienzo al buffer de imagen
        var frame = createImage(width, height);
        frame.copy(0, 0, width, height, 0, 0, width, height);

        // agrega el cuadro al array
        frames.push(frame);

        push();
        angleMode(DEGREES);
        translate(width * (3 / 5.8), height / 2);
        noFill();
        strokeWeight(8);

        for (var n = 0; n < this.s1.value(); n++) {
            beginShape();
            for (var i = 0; i < 360; i += this.s3.value()) {
                var rad = map(sin(i * this.s2.value() + frameCount), -1, 1, this.s4.value(), this.s5.value());
                var x = rad * cos(i);
                var y = rad * sin(i);
                vertex(x, y);
            }
            endShape(CLOSE);
            rotate(frameCount * this.s6.value());
        }
        pop();

        push();
        fill(131, 56, 236);
        noStroke();
        rect(0, 0, width / 5.5, height);
        pop();

        angleMode(RADIANS);

        push();
        fill(131, 56, 236);
        noStroke();
        rect(width - height / 3, 0, width / 6, height);
        pop();

        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(22);

        text("Toca para entrar en onda", width - width / 8.3, height / 6, width / 12, height / 4.5);

        text("Toca para guardar GIF.", width - width / 8.3, height - height / 2.1, width / 12, height / 6);
        // text("¡Toca una sola vez y espera a que renderise tu GIF!", width - width / 8.3, height - height / 2.8, width / 12, height / 6);

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