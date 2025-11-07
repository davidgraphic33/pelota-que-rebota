const NP = 100;
let pelotas = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for(let i = 0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota;
    }
    
}

function draw() {
    background("#ff1d1dff");

    for(let i = 0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }

}