const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

class Shapes {
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }

    draw(){
        throw new Error('Must use draw() method.')
    }
};

module.exports = Shapes;


