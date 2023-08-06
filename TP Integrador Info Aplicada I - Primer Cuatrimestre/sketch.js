const world = new World();

function preload() {
    //iconos
    world.img_next = loadImage('assets/next.png');
    world.img_prev = loadImage('assets/prev.png');
    world.img_start = loadImage('assets/start.png');
    world.img_home = loadImage('assets/home.png');
    world.img_comp1 = loadImage('assets/comp1.png');
    world.img_comp2 = loadImage('assets/comp2.png');
    world.img_comp3 = loadImage('assets/comp3.png');
    world.img_nav = loadImage('assets/nav.png');
    world.captura = loadImage('assets/captura.png');
    world.reproducir = loadImage('assets/reproducir.png');
    world.grabar = loadImage('assets/grabar.png');

    //fuentes
    world.myFont = loadFont('fonts/myfont.ttf');

    //sonidos
    world.fireworkSound = loadSound('sounds/firework.mp3');
    world.ambientSound = loadSound('sounds/ambientSound.mp3');
    world.camera = loadSound('sounds/camera.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //crear escenas y agregarlas al mundo
    const sceneHome = new SceneHome(); // escena home
    world.addScene(sceneHome);
    const sceneNav = new SceneNav(); // escena nav
    world.addScene(sceneNav);
    const sceneOne = new SceneOne(); // escena 1
    world.addScene(sceneOne);
    const sceneTwo = new SceneTwo(); // escena 2
    world.addScene(sceneTwo);
    const sceneThree = new SceneThree(); // escena 3
    world.addScene(sceneThree);
    const sceneEnd = new SceneEnd(); // escena end
    world.addScene(sceneEnd);

    //definir la escena por defecto al iniciar el programa
    world.setScene(0);
}

function draw() {
    world.currentScene.draw();
}

function mouseClicked() {
    world.currentScene.mouseClicked();
}

function keyPressed() {
    world.currentScene.keyPressed();
}