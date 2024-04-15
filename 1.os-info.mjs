import { platform, release, arch, cpus, freemem, uptime } from 'node:os'
//import os from 'node:os'

console.log('Información del sistema operativo:')
console.log('------------------------------')


console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectura', arch() / 1024 / 1024)
console.log('CPUs', cpus() / 1024 / 1024) // Esto es avanzado pero nos permitirá escalar nuestros proyectos en node sabiendo los procesadores que tenemos disponibles
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Uptime / Días encendidos', uptime() / 60 / 60)