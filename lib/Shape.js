class Shape {
    constructor(text, textColor, textX, textY) {
        this.text = text;
        this.textColor = textColor;
        this.textX = textX;
        this.textY = textY;
        this.shapeColor = '';
    }

    setColor(color) {
        this.shapeColor = color;
    }
}

module.exports = Shape;