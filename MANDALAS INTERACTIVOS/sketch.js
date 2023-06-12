function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    s1 = createSlider(1, 10, 5, 1).position(20, 750);
    p1 = createP("Numero de elementos").position(20, 710);
    s2 = createSlider(1, 8, 5, 1).position(200, 750);
    p2 = createP("Cantidad de partes").position(200, 710);
    s3 = createSlider(3, 30, 3, 3).position(380, 750);
    p3 = createP("Cantidad de angulos").position(380, 710);
    s4 = createSlider(50, 300, 100, 10).position(20, 850);
    p4 = createP("radio minimo").position(20, 800);
    s5 = createSlider(50, 300, 200, 10).position(200, 850);
    p5 = createP("radio maximo").position(200, 800);
    s6 = createSlider(0.1, 1, 0.1, 0.05).position(380, 850);
    p6 = createP("velocidad de rotacion").position(380, 800);


}

function draw() {
    background(250, 50, 100, 30);

    // Copiar el contenido del lienzo al buffer de imagen
    let frame = createImage(width, height);
    frame.copy(0, 0, width, height, 0, 0, width, height);

    // Agregar el cuadro al array
    frames.push(frame);

    translate(width / 2, height / 2);

    noFill();
    strokeWeight(8);

    for (var n = 0; n < s1.value(); n++) {
        stroke(50 + n * 10, 100 + n * 5, 50)
        beginShape();
        for (var i = 0; i < 360; i += s3.value()) {
            var rad = map(sin(i * s2.value() + frameCount), -1, 1, s4.value(), s5.value());
            var x = rad * cos(i);
            var y = rad * sin(i);
            vertex(x, y);
        }
        endShape(CLOSE);
        rotate(frameCount * s6.value());
    }
}