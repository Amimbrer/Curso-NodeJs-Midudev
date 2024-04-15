const path = require('node:path')

// Barra separadora de carpetas segun SO
console.log(path.sep)

// Unir rutas con Path.Join
const filePath = path.join('content', 'subfoler', 'test.text')
console.log(filePath)

// Base name te permite quitarle obtener el archivo de una ruta y quitarle la extensión
const baseConExtension = path.basename('/tmp/midu-secre/password.txt')
console.log('Archivo con extensión:', baseConExtension)

const base = path.basename('/tmp/midu-secre/password.txt', '.txt')
console.log('Archivo sin extensión:', base)

// Extname te permite obtener la extensión de un archivo
const extension = path.extname('my.super.image.jpg')
console.log(extension)