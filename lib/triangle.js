const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<polygon points="150,20 220,180 80,180" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
};

module.exports = Triangle;