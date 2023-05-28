function setup() {
    createCanvas(512, 512);;
}

function draw() {
    background(220);
    console.log("x:" + mouseX + "y:" + mouseY);

    push();
    rectMode(CENTER)
        //rectangulos
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var x = i * 50 + 81;
            var y = j * 50 + 128;
            var d = j * 7;

            fill(j * 30);
            noStroke();

            rect(x, y, d);
        }
    }
    pop();

    //lineas horizontales superiores
    push();
    var lineSpacing = 300 / 150;
    var lineWidth = 1;

    for (let i = 0; i < 50; i++) {
        var y = lineSpacing * (i + 10);
        drawLine(0, y, width, y, lineWidth);
    }

    function drawLine(x1, y1, x2, y2, lineWidth) {
        stroke(0);
        strokeWeight(lineWidth);
        line(x1, y1, x2, y2);
    }
    pop();

    //Si se mantiene el mouse clickeado aparecen 3 diferentes primitivas
    push();
    var shapeType = floor(random(3));
    var x = random(width);
    var y = random(height / 4);

    noStroke();
    fill(255, 255, 255);
    if (mouseIsPressed) {
        switch (shapeType) {
            case 0:
                ellipse(x, y, 20, 20);
                break;
            case 1:
                rect(x, y, 50, 50);
                break;
            case 2:
                triangle(x, y, x + 50, y, x + 30, y + 30);
                break;
        }
    }
    pop();
}