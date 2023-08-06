class Particle {
    constructor(x, y, xSpeed, ySpeed, pColor, size) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.color = pColor;
        this.size = size;
        this.isAlive = true;
        this.trail = [];
        this.trailIndex = 0;

        this.gravity = .25;
        this.endColor = color(64, 0);
    }

    step() {
        this.trail[this.trailIndex] = createVector(this.x, this.y);
        this.trailIndex++;
        if (this.trailIndex > 10) {
            this.trailIndex = 0;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.ySpeed += this.gravity;

        if (this.y > height) {
            this.isAlive = false;
        }
    }

    draw() {
        this.drawTrail();
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.size, this.size);

    }

    drawTrail() {
        let index = 0;

        for (let i = this.trailIndex - 1; i >= 0; i--) {
            const tColor = lerpColor(color(this.color), this.endColor, index / this.trail.length);
            fill(tColor);
            noStroke();
            rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
            index++;
        }

        for (let i = this.trail.length - 1; i >= this.trailIndex; i--) {
            const tColor = lerpColor(color(this.color), this.endColor, index / this.trail.length);
            fill(tColor);
            noStroke();
            rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
            index++;
        }
    }
}