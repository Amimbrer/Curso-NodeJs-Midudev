console.log('Hola, mundo');
console.error('Esto es un error');

// Variable global para nodejs (window en caso de consola navegador)
console.log('globalThis')
globalThis.console.log('Console.Log de globalThis')

// Usar módulos clásica/deprecated
const sum = require('../cjs/sum')
console.log(`Resultado modulo = ${sum(1, 2)}`)

// .js -> por defecto utiliza CommonJS
// .mjs -> por defecto ES Modules
import { sum1, sub, mult } from './sum.mjs'
console.log(`Resultado modulo ES Modules= ${sum1(1, 2)}`)
console.log(`Resultado modulo ES Modules= ${mult(2, 2)}`)
console.log(`Resultado modulo ES Modules= ${sub(1, 2)}`)
