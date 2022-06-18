import image from './assets/image.png'
import { titleBlock, imageBlock, columnsBlock, textBlock } from './classes/blocks'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales bibendum nunc id fringilla. Curabitur mollis nunc ex, non congue mi euismod et. Sed fringilla justo sed malesuada posuere. Praesent vitae orci mattis felis laoreet dignissim sit amet nec eros. Integer ac tincidunt est, quis auctor ante.'


export const model = [
    new titleBlock('Hello my friend!!!', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'beige',
            padding: '1.5rem',
            'text-align': 'center',
        }
    }),
    new imageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),

    new columnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new textBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]