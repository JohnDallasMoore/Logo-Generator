const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
}

module.exports = Circle