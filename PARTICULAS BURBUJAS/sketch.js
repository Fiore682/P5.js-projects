setup = () => {
    createCanvas(windowWidth, windowHeight);
    noStroke();
};

draw = () => {
    background("white");
    system.avoidOverlap();
    system.update();
    frameCount % 12 == 0 && system.spawn(random(width), random(height / 2));
};

mouseClicked = () => system.spawn(mouseX, mouseY);

const particle = (x, y) => ({
    posx: x,
    posy: y,
    velx: 0,
    vely: 0,
    accx: 0,
    accy: 0,
    gravity: 0,
    radius: random(width / 100, width / 30),
    color: color(random(256)),
    show() {
        fill(this.color);
        ellipse(this.posx, this.posy, this.radius * 2);
    },
});

const system = {
    particles: [],

    spawn(x, y) {
        for (let i = 12; i--;) {
            const a = random(TWO_PI);
            this.particles.push(particle(x + cos(a), y + sin(a)));
        }
    },

    avoidOverlap() {
        for (let i = this.particles.length; i--;) {
            const current = this.particles[i];
            for (let j = i; j--;) {
                const other = this.particles[j];
                const dx = current.posx - other.posx;
                const dy = current.posy - other.posy;
                const distance = sqrt(dx * dx + dy * dy);
                const sumRadius = current.radius + other.radius;
                if (distance < sumRadius) {
                    let strength = 1 - distance / sumRadius;
                    strength *= 0.25;
                    current.accx += dx * strength;
                    current.accy += dy * strength;
                    other.accx -= dx * strength;
                    other.accy -= dy * strength;
                }
            }
        }
    },

    update() {
        for (const b of this.particles) {
            b.gravity += 0.01;
            b.velx += b.accx;
            b.vely += b.accy;
            b.posx += b.velx;
            b.posy += b.vely + b.gravity;
            b.velx *= 0.5;
            b.vely *= 0.5;
            b.accx = 0;
            b.accy = 0;
            b.show();
        }
        this.particles = this.particles.filter((b) => {
            b.radius *= .995;
            return b.radius > 2 && b.posy - b.radius < height
        });
    },
};