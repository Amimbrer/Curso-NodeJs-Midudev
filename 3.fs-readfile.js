const { error } = require('node:console')
const fs = require('node:fs')

// Sistema asincrono en NodeJS
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (error, text) => { // <---- Se ejecutará el callback cuando finalice de leer el archivo
    console.log(text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (error, text) => { // <---- Se ejecutará el callback cuando finalice de leer el archivo
    console.log('Texto del archivo 2 \n', text)
})
