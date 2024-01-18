const {Circle, Square} = require('../lib/shapes');

describe('Shape Class Tests', () => {
    it('Should render a square element tag', () => {
        const square = new Square('xyz', 'red', 90, 75);

        square.setColor('red');

        expect(square.render()).toBe('<rect width="150" height="150" fill="${this.shapeColor}" />')
    })
})