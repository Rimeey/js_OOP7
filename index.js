'use strict'

const rand_color = function () {
    return (`#` + Math.floor(Math.random() * 16777216).toString(16)).toUpperCase();
}

class Figure {
    constructor(width, height) {
        this.styles = {
            'margin': '10px auto',
            'background-color': `${rand_color()}`,
            'width': width + 'px',
            'height': height + 'px'
        }
    }
    add_property(property, value) {
        this.styles[property] = value;
    }
    generate_style() {
        let str = ``;
        for (let key in this.styles) {
            str += key + ':' + this.styles[key] + ';';
        }
        return str
    }
    render() {
        document.write(`<div style="${this.generate_style()}"></div>`);
    }
    background() {
        document.write(`<style>body{background-color: ${rand_color()};}</style>`);
    }
}

class Square extends Figure {
    constructor(width, height = width) {
        super(width, height);
    }
}

class Rectangle extends Square {
    constructor(width, height) {
        super(width, height);
    }
}

class Circle extends Square {
    constructor(width, height = width) {
        super(width, height);
        this.add_property('border-radius', '50%');
    }
}

class Ellipse extends Rectangle {
    constructor(width, height) {
        super(width, height);
        this.add_property('border-radius', '50%');
    }
}

class Rhombus extends Square {
    constructor(width, height = width) {
        super(width, height);
        this.add_property('transform', 'rotate(45deg)');
    }
}

class Semicircle extends Rectangle {
    constructor(width, height) {
        super(width, height);
        this.add_property('border-radius', '0 100% 100% 0 / 0 50% 50% 0');
    }
}

class Hexagon extends Square {
    constructor(width, height) {
        super(width, height);
        this.add_property('clip-path', 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)');
    }
}

class parallelogram extends Rectangle {
    constructor(width, height) {
        super(width, height);
        this.add_property('clip-path', 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)');
    }
}

const question = +prompt('Whats a figure you want?');
const parametr = +prompt('What a length side?');
const figure = function (question, parametr) {
    if (question === 1) {
        new Square(parametr).render();
    }
    if (question === 2) {
        const parametr2 = prompt('What a length side 2?');
        new Rectangle(parametr, parametr2).render();
    }
    if (question === 3) {
        new Circle(parametr).render();
    }
    if (question === 4) {
        const parametr2 = prompt('What a length side 2?');
        new Ellipse(parametr, parametr2).render();
    }
    if (question === 5) {
        new Rhombus(parametr).render();
    }
    if (question === 6) {
        const parametr2 = prompt('What a length side 2?');
        new Semicircle(parametr, parametr2).render();
    }
    if (question === 7) {
        new Hexagon(parametr).render();
    }
    if (question === 8) {
        const parametr2 = prompt('What a length side 2?');
        new parallelogram(parametr, parametr2).render();
    }
}
figure(question, parametr);