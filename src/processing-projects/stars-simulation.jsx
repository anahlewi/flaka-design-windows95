const starsSimulation = (p) => {
    const numStars = 500;
    let stars = [];

    p.setup = () => {
        p.createCanvas(495, 500);
        p.stroke(255);
        p.strokeWeight(2);
        
        for(let i = 0; i < numStars; i ++) {
            stars.push(new Star(p.random(p.width), p.random(p.height)));
        }
    }

    p.draw = () => {
    p.background(0, 50);
    
    const acc = p.map(p.mouseY, 0, p.width, 0.005, 0.2);
    
    stars = stars.filter(star => {
        star.draw();
        star.update(acc);
        return star.isActive();
    });
    
    while(stars.length < numStars) {
        stars.push(new Star(p.random(p.width), p.random(p.height)));
    }
    }

    class Star {
    constructor(x, y) {
        this.position = p.createVector(x, y);
        this.prevPosition = p.createVector(x, y);
        
        this.velocity = p.createVector(0, 0);
        
        this.angle = p.atan2(y - (p.height/2), x - (p.width/2));
    }
    
    isActive() {
        return onScreen(this.prevPosition.x, this.prevPosition.y);
    }
    
    update(acc) {
        this.velocity.x += p.cos(this.angle) * acc;
        this.velocity.y += p.sin(this.angle) * acc;
        
        this.prevPosition.x = this.position.x;
        this.prevPosition.y = this.position.y;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    
    draw() {
        const alpha = p.map(this.velocity.mag(), 0, 3, 0, 255);
        p.stroke(255, alpha);
        p.line(this.position.x, this.position.y, this.prevPosition.x, this.prevPosition.y);
    }
    }

    function onScreen(x, y) {
    return x >= 0 && x <= p.width && y >= 0 && y <= p.height;  
    }
};

export default starsSimulation;