import { row, col, css } from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('Метод должен быть реализован');
    }
};

export class titleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { tag, styles } = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
};

export class imageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { styles, imageStyles, alt = '' } = this.options;
        return row(`<img src = "${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles));
    }
};

export class columnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const html = this.value.map(item => col(item));
        return row(html.join(''), css(this.options.styles));
    }
};

export class textBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
};