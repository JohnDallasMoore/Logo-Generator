const Shape = require('./shapes');

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
}

module.exports = Circle;