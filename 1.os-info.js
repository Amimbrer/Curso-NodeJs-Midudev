const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('------------------------------')


console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch() / 1024 / 1024)
console.log('CPUs', os.cpus() / 1024 / 1024) // Esto es avanzado pero nos permitirá escalar nuestros proyectos en node sabiendo los procesadores que tenemos disponibles
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Uptime / Días encendidos', os.uptime() / 60 / 60)