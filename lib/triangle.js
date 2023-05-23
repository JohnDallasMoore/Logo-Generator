const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
};

module.exports = Triangle;