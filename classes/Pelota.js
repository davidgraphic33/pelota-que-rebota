class Pelota {

    constructor() {
     this.posx;
     this.posy;
     this.diam;
     this.rad;
     this.velx;
     this.vely;

     this.diam = random(25, 100);
     this.rad = this.diam / 2;

     this.posx = random(this.rad, width - this.rad);
     this.posy = random(this.rad, height - this.rad);

     this.velx = random(-5, 5);
     this.vely = random(-5, 5);

     this.nuevoColor = color(random(10,50), random(10, 255), random(100, 150), 100);
    
    }

    actualizar() {

        if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;
    }

    visualizar() {

    push();
    translate(this.posx, this.posy);
    stroke(0);
    strokeWeight(this.diam * 0.1);
    noFill();
    ellipse(0, 0, this.diam);

    noStroke();
    fill(255, 0, 0);
    arc(0, 0, this.diam, this.diam, PI, 0, CHORD);

    fill(255);
    arc(0, 0, this.diam, this.diam, 0, PI, CHORD);

    stroke(0);
    strokeWeight(this.diam * 0.08);
    line(-this.rad, 0, this.rad, 0);

    fill(255);
    stroke(0);
    strokeWeight(this.diam * 0.06);
    ellipse(0, 0, this.diam * 0.3);

    noStroke();
    fill(255);
    ellipse(0, 0, this.diam * 0.18);

    pop();
        
}

    }