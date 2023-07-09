class Button {
    constructor(x, y, w, h, img, action, sceneNav) { // tiene un parametro extra usado para que el efecto de la linea que se dibuja progresivamente bajo los botones funcione solo en sceneNav
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.action = action;
        this.sceneNav = sceneNav;
        this.isMouseOver = false;
        this.lineProgress = 0; // var para controlar el progreso de la animación de la línea debajo de los botones
        this.lineSpeed = 0.05; // velocidad de la animación de la línea 

    }

    draw() {
        // verifica si el mouse está pasando por encima del botón
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            this.isMouseOver = true;
            this.w = 160;
            this.h = 160;
        } else {
            this.isMouseOver = false;
            this.w = 128;
            this.h = 128;
        }

        push();
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.w, this.h);

        // dibuja una línea progresivamente debajo del botón si el mouse está sobre él 
        if (this.isMouseOver && this.sceneNav === "sceneNav") {
            stroke(255);
            strokeWeight(3);

            // calcula la posición de inicio y fin de la línea
            this.startX = this.x - this.w / 2;
            this.endX = this.x + this.w / 2;
            this.lineY = this.y + this.h / 2 + 10; // Calcula la posición actual de la línea basada en el progreso de la animación
            this.currentX = lerp(this.startX, this.endX, this.lineProgress);

            line(this.startX, this.lineY, this.currentX, this.lineY);

            // incrementa el progreso de la animación
            this.lineProgress += this.lineSpeed;
            // Limita el progreso de la animación entre 0 y 1
            this.lineProgress = constrain(this.lineProgress, 0, 1);
        } else {
            // reinicia el progreso de la animación si el mouse no está sobre el botón
            this.lineProgress = 0;
        }
        pop();
    }

    contains(x, y) {
        if (
            x >= this.x - this.w / 2 &&
            x <= this.x + this.w / 2 &&
            y >= this.y - this.h / 2 &&
            y <= this.y + this.h / 2
        ) {
            return true;
        }
        return false;
    }

    clicked() {
        if (this.contains(mouseX, mouseY)) {
            this.action();
        }
    }
}