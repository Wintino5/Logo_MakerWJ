const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Shape Class Tests', () => {
    it('Should render a square element tag', () => {
        const square = new Square('xyz', 'red', 90, 75);

        square.setColor('red');

        expect(square.render()).toBe('<rect width="150" height="150" fill="red" />')
    });
    it('Should render a circle element tag', () => {
        const circle = new Circle('xyz', 'purple', 150, 120);

        circle.setColor('purple');

        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="purple" />')
    });
    it('Should render a triangle element tag', () => {
        const trianlge = new Triangle('xyz', 'green', 150, 145);

        trianlge.setColor('green');

        expect(trianlge.render()).toBe('<polygon points = "150, 18 244, 182 56, 182" fill="green" />')
    });
})






























// it('Should return a circle object matching specific properties', () => {
//     const circle = new Circle('xyz', 'red', 150, 120);

//     circle.setColor('red');

//     console.log(cirlce);

//     expect(circle).toMatchObject({

//     })
// })