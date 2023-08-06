//clase controladora de escenas
class World {
    constructor() {
        this.currentScene = null;
        this.currentIndex = null;
        this.scenes = [];
    }
    addScene(scene) {
        this.scenes.push(scene);
    }

    //no se pueden cambiar estas variables porque se encargan de que tengan valores consistentes
    setScene(i) {
        if (i < 0 || i >= this.scenes.length) {
            print("ERROR:No existe la escena ${i}")
            return
        }
        this.currentScene = this.scenes[i];
        this.currentIndex = i;
    }
    nextScene() {
        //esto genera un loop modulo, porque al dividir siempre el resto va a ser en loop (o algo asi)
        let i = (this.currentIndex + 1) % this.scenes.length;
        this.setScene(i);
    }

    prevScene() {
        let i = this.currentIndex - 1;
        if (i < 0) {
            i = this.scenes.length - 1;
        }
        this.setScene(i);
    }
}