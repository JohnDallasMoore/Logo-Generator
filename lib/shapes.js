class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }

    render(){
        throw new Error('Must use draw() method.')
    }
};

module.exports = Shape;


