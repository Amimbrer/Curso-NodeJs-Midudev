const { error } = require('node:console')
const fs = require('node:fs')

// Leemos el directorio actual
fs.readdir('.', (error, files) => {
    if (error) {
        console.log('Error al leer el directorio: ', error)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})