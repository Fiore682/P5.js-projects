class Firework extends Particle {
    constructor(x, y, colors, particles) {

        super(x, y, random(-2, 2), random(-10, -15), random(colors), 10);
        this.countdown = random(30, 60);
        this.particles = particles;
    }

    step() {
        super.step();

        this.countdown--;
        if (this.countdown <= 0) {
            const explosionSize = floor(random(40, 150));
            for (let i = 0; i < explosionSize; i++) {

                const speed = random(5, 15);
                const angle = random(TWO_PI);
                const xSpeed = cos(angle) * speed;
                const ySpeed = sin(angle) * speed;

                this.particles.push(new Particle(this.x, this.y, xSpeed, ySpeed, this.color, 5));
            }

            this.isAlive = false;
        }
    }

}