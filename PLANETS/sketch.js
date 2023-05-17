    //puntos blancos formados aleatoriamente alrededor de los planetas azules
    let diameter = 200; //establezco el diametro dentro de donde los puntos van a aparecer
    let center_x = 422;
    let center_y = 172;
    let cant_points = 50; //le digo cuantos puntos quiero que haga

    let diameter2 = 230;
    let center_x2 = 0;
    let center_y2 = 0;
    let cant_points2 = 100;

    let diameter3 = 180;
    let center_x3 = 345;
    let center_y3 = 392;
    let cant_points3 = 100;

    let diameter4 = 170;
    let center_x4 = 115;
    let center_y4 = 578;
    let cant_points4 = 100;

    //variables para cambiar el color de los planetas aleatoriamente
    let ellipseX = 0;
    let ellipseX2 = 422;
    let ellipseX3 = 345;
    let ellipseY = 0;
    let ellipseY2 = 172;
    let ellipseY3 = 392;


    //variables que se utilizan al presionar I o L, dibujan lineas que seguira el mouse y se generan desde cada esfera blanca
    let lineX = 120;
    let lineY = 300;
    let lineX2;
    let lineY2;
    let lineXX = 260;
    let lineYY = 80;
    let lineXX2;
    let lineYY2;
    let lineXXX = 500;
    let lineYYY = 340;
    let lineXXX3;
    let lineYYY3;
    let lineXXXX = 150;
    let lineYYYY = 500;
    let lineXXXX4;
    let lineYYYY4;
    let lineXXXXX = 500;
    let lineYYYYY = 500;
    let lineXXXXX5;
    let lineYYYYY5;
    let mostrarLine = false;

    let moverCirculos = false;


    function setup() {
        createCanvas(600, 600);
        ellipseColor = color(5, 130, 158);
        frameRate(15);
    }



    function draw() {
        background(255, 213, 2);
        console.log("x:" + mouseX + "y:" + mouseY);




        //fondo violeta oscuro
        push();
        fill(100, 43, 57);
        strokeWeight(5);
        stroke(247, 247, 255);
        rect(20, 20, 560, 560);
        pop();

        //ellipses amarillas que laten
        push();
        strokeWeight(15);
        stroke(255, 213, 2);
        fill(240, 200, 8, 0);
        ellipse(0, 0, 390 + 10 * sin(((moverCirculos + 1) * frameCount) / 6), 390 + 10 * sin(((moverCirculos + 1) * frameCount) / 6));
        strokeWeight(10);
        ellipse(0, 0, 420 + 10 * sin(((moverCirculos + 1) * frameCount) / 6), 420 + 10 * sin(((moverCirculos + 1) * frameCount) / 6));
        strokeWeight(5);
        ellipse(0, 0, 450 + 10 * sin(((moverCirculos + 1) * frameCount) / 6), 450 + 10 * sin(((moverCirculos + 1) * frameCount) / 6));
        strokeWeight(3);
        ellipse(0, 0, 470 + 10 * sin(((moverCirculos + 1) * frameCount) / 6), 470 + 10 * sin(((moverCirculos + 1) * frameCount) / 6));
        pop();

        //ellipse arriba izquierda blancas
        push();
        noFill();
        strokeWeight(6);
        stroke(247, 247, 255);
        ellipse(0, 0, 370, 370);
        strokeWeight(8);
        stroke(247, 247, 255);
        ellipse(0, 0, 350, 350);
        strokeWeight(6);
        ellipse(0, 0, 330, 330);
        strokeWeight(4);
        ellipse(0, 0, 310, 310);
        strokeWeight(2);
        ellipse(0, 0, 290, 290);
        strokeWeight(2);
        ellipse(0, 0, 280, 280);
        strokeWeight(2);
        ellipse(0, 0, 270, 270);
        strokeWeight(2);
        ellipse(0, 0, 260, 260);
        strokeWeight(2);
        ellipse(0, 0, 250, 250);
        strokeWeight(2);
        ellipse(0, 0, 240, 240);
        pop();

        //planeta esquina izquierda arriba rosa
        //planeta esquina izquierda arriba
        push();
        stroke(211, 62, 67);
        fill(211, 62, 67);
        ellipse(0, 0, 230, 230);
        pop();

        //loop para que siempre se esten creando 50 points dentro del diametro que especifique
        for (let i = 0; i < cant_points2; i++) {
            let x = Math.random() * diameter2 - diameter2 / 2 + center_x2;
            let y = Math.random() * diameter2 - diameter2 / 2 + center_y2;
            let distancia = dist(x, y, center_x2, center_y2); //uso dist para calcular la distancia entre el punto generado al azar y el centro del ellipse. Si la distancia es menor que el radio del ellipse (mitad del diametro), el punto esta dentro del ellipse y se dibuja
            if (distancia < diameter2 / 2) {
                stroke(247, 247, 255);
                ellipse(x, y, 1, 1);
            }
        }

        push();
        fill(ellipseColor);
        strokeWeight(2);
        stroke(247, 247, 255);
        ellipse(ellipseX, ellipseY, 200, 200);
        pop();

        //bezier blancas saturno
        push();
        noStroke();
        fill(247, 247, 255);
        bezier(490, 133, 495, 160, 555, 117, 561, 141);
        bezier(200, 138, 510, 143, 579, 155, 583, 138);
        pop();

        //seg ellipse rosa que tiene dentro los puntitos blancos
        push();
        noStroke();
        fill(211, 62, 67);
        ellipse(422, 172, 200, 200);
        pop();

        //loop para que siempre se esten creando 50 points dentro del diametro que especifique
        for (let i = 0; i < cant_points; i++) {
            let x = Math.random() * diameter - diameter / 2 + center_x;
            let y = Math.random() * diameter - diameter / 2 + center_y;
            let distancia = dist(x, y, center_x, center_y); //uso dist para calcular la distancia entre el punto generado al azar y el centro del ellipse. Si la distancia es menor que el radio del ellipse (mitad del diametro), el punto esta dentro del ellipse y se dibuja
            if (distancia < diameter / 2) {
                stroke(247, 247, 255);
                ellipse(x, y, 1, 1);
            }
        }

        //bezier blancas saturno
        push();
        noStroke();
        fill(247, 247, 255);
        bezier(193, 207, 200, 210, 280, 230, 278, 206);
        bezier(238, 208, 180, 190, 340, 190, 369, 203);
        pop();

        //saturno
        //planeta
        push();
        angleMode(DEGREES); //establezco grados para hacer que los anillos de saturno giren sobre su propio eje
        fill(ellipseColor);
        strokeWeight(2);
        stroke(247, 247, 255);
        ellipse(ellipseX2, ellipseY2, 100, 100);
        pop();

        //anillos amarillos que rotan
        push();
        translate(422, 172);
        rotate(frameCount * 0.6);
        noFill();
        strokeWeight(3)
        stroke(255, 213, 2);
        line(-60, -20, 60, -20);
        line(-80, -10, 80, -10);
        line(-100, 0, 100, 0);
        line(-80, 10, 80, 10);
        line(-60, 20, 60, 20);
        pop();

        //medio planeta
        //medio planeta arc rosa
        //bezier blanca detras de arc
        push();
        noStroke();
        fill(247, 247, 255);
        bezier(128, 541, 128, 580, 360, 545, 382, 553);
        bezier(90, 560, 100, 570, 300, 580, 282, 540);
        pop();

        angleMode(RADIANS); //volvi a establecer que el canvas se maneje con radianes para que la funcion PI se pueda usar


        push();
        noStroke();
        fill(211, 62, 67);
        arc(115, 578, 170, 180, PI, TWO_PI);
        pop();

        //loop para que siempre se esten creando 50 points dentro del diametro que especifique
        for (let i = 0; i < cant_points4; i++) {
            let x = Math.random() * diameter4 - diameter4 / 2 + center_x4;
            let y = Math.random() * diameter4 - diameter4 / 2 + center_y4;
            let distancia = dist(x, y, center_x4, center_y4); //uso dist para calcular la distancia entre el punto generado al azar y el centro del ellipse. Si la distancia es menor que el radio del ellipse (mitad del diametro), el punto esta dentro del ellipse y se dibuja
            if (distancia < diameter4 / 2) {
                stroke(247, 247, 255);
                ellipse(x, y, 1, 1);
            }
        }

        push();
        fill(ellipseColor);
        strokeWeight(2);
        stroke(247, 247, 255);
        arc(115, 578, 140, 150, PI, TWO_PI);
        pop();

        //planeta central ellipse rosa
        push();
        noStroke();
        fill(211, 62, 67);
        ellipse(345, 392, 185, 185);
        pop();

        //loop para que siempre se esten creando 50 points dentro del diametro que especifique
        for (let i = 0; i < cant_points3; i++) {
            let x = Math.random() * diameter3 - diameter3 / 2 + center_x3;
            let y = Math.random() * diameter3 - diameter3 / 2 + center_y3;
            let distancia = dist(x, y, center_x3, center_y3); //uso dist para calcular la distancia entre el punto generado al azar y el centro del ellipse. Si la distancia es menor que el radio del ellipse (mitad del diametro), el punto esta dentro del ellipse y se dibuja
            if (distancia < diameter3 / 2) {
                stroke(247, 247, 255);
                ellipse(x, y, 1, 1);
            }
        }

        //planeta central
        push();
        fill(ellipseColor);
        strokeWeight(2);
        stroke(247, 247, 255);
        ellipse(ellipseX3, ellipseY3, 150, 150);
        pop();

        //planeta chico
        //ellipse amarilla
        // anillos
        push();
        fill(247, 247, 255);
        strokeWeight(19);
        stroke(211, 62, 67);
        ellipse(505, 500, 100, 100);
        pop();

        push();
        fill(247, 247, 255);
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 500, 50, 50);
        pop();

        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 500, 70, 70);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 500, 90, 90);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 500, 100, 100);
        pop();

        //planeta chico
        //ellipse amarilla
        // anillos
        push();
        fill(247, 247, 255);
        strokeWeight(19);
        stroke(211, 62, 67);
        ellipse(150, 500, 100, 100);
        pop();

        push();
        fill(247, 247, 255);
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(150, 500, 50, 50);
        pop();

        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(150, 500, 70, 70);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(150, 500, 90, 90);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(150, 500, 100, 100);
        pop();

        //planeta chico
        //ellipse amarilla
        //anillos
        push();
        fill(247, 247, 255);
        strokeWeight(19);
        stroke(211, 62, 67);
        ellipse(120, 300, 100, 100);
        pop();

        push();
        fill(247, 247, 255);
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(120, 300, 50, 50);
        pop();

        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(120, 300, 70, 70);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(120, 300, 90, 90);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(120, 300, 100, 100);
        pop();

        //planeta chico
        //ellipse amarilla
        // anillos
        push();
        fill(247, 247, 255);
        strokeWeight(19);
        stroke(211, 62, 67);
        ellipse(260, 80, 70, 70);
        pop();

        push();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(260, 80, 10, 10);
        pop();

        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(260, 80, 30, 30);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(260, 80, 50, 50);
        pop();
        push();
        noFill();
        strokeWeight(1);
        stroke(255, 213, 2);
        ellipse(260, 80, 80, 80);
        pop();

        //planeta chico
        //ellipse amarilla
        // anillos
        push();
        fill(247, 247, 255);
        strokeWeight(19);
        stroke(211, 62, 67);
        ellipse(505, 340, 50, 50);
        pop();
        push();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 340, 50, 50);
        pop();

        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 340, 10, 10);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 340, 20, 20);
        pop();
        push();
        noFill();
        strokeWeight(2);
        stroke(255, 213, 2);
        ellipse(505, 340, 30, 30);
        pop();

        push();
        if (mostrarLine) { //dibuja una linea al presionar I o L
            fill(247, 247, 255);
            strokeWeight(3);
            line(lineX, lineY, lineX2, lineY2);
            line(lineXX, lineYY, lineXX2, lineYY2);
            line(lineXXX, lineYYY, lineXXX3, lineYYY3);
            line(lineXXXX, lineYYYY, lineXXXX4, lineYYYY4);
            line(lineXXXXX, lineYYYYY, lineXXXXX5, lineYYYYY5);
        }
        pop();
    }

    function keyPressed() { //dibuja lineas al presionar I o L que salen de cada esfera blanca cuyo extremo Y seguira el movimiento del mouse
        if (key == "A" || key == "a" || key == "s" || key == "S") {
            mostrarLine = !mostrarLine;
        }
    }

    function mouseMoved() { //le digo al programa que todos los extremos Y de las lineas van a seguir al mouse
        lineX2 = mouseX;
        lineY2 = mouseY;
        lineXX2 = mouseX;
        lineYY2 = mouseY;
        lineXXX3 = mouseX;
        lineYYY3 = mouseY;
        lineXXXX4 = mouseX;
        lineYYYY4 = mouseY;
        lineXXXXX5 = mouseX;
        lineYYYYY5 = mouseY;
    }

    //funcion para cambiar de color los planetas azules al hacerles click izquierdo
    function mouseClicked() {
        if (dist(mouseX, mouseY, ellipseX, ellipseY) < 100 || dist(mouseX, mouseY, ellipseX2, ellipseY2) < 100 || dist(mouseX, mouseY, ellipseX3, ellipseY3) < 100) {
            ellipseColor = color(random(255), random(255), random(255));
        }
    }