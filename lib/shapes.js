class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }

    draw(){
        throw new Error('Must use draw() method.')
    }
};

module.exports = Shape;


