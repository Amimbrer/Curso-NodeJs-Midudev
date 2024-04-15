// Información sobre el proceso actual

// Argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit()

// podemos controlar los eventos del proceso
process.on('exit', () => {
    // limpiar los recursos
    console.log('Se ha hecho exit')
})

// Current working directory
console.log(process.cwd())

// Variables de entorno en el proceso
console.log(process.env.PEPITO)