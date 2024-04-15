const fs = require('node:fs')

// Sistema asincrono en NodeJS
console.log('Leyendo el primer archivo...')
fs.promises.readFile('./archivo.txt', 'utf-8')
    .then(text => { // <---- Igual que los callbacks pero con promesas
        console.log(text)
    });

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.promises.readFile('./archivo2.txt', 'utf-8')
    .then(text => { // <---- Igual que los callbacks pero con promesas
        console.log(text)
    });
