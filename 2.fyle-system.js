// FILE SYSTEM EN NODEJS, uno de los módulos más importantes

const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // Tamaño del archivo
)


