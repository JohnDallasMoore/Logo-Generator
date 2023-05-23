const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

module.exports = Circle;