const fs = require('node:fs/promises')

const init = async () => {

    // Async y await es secuancial por lo que aunque cuando lee el archivo libera espacio no lo hace en pararalelo, no va a continuar hasta que termine de leer el primer archivo o el segundo
    console.log('Leyendo el primer archivo...')
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log(text)

    console.log('Hacer cosas mientras lee el archivo...')

    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log(text2)
}

init()