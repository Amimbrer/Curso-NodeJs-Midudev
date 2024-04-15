import { promises } from 'node:dns'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const folder = process.argv[2] ?? '.'

async function ls(directory) {
    let files
    try {
        files = await readdir(directory)
    } catch {
        console.error(`No se ha podido leer el directorio ${folder}`)
        process.exit(1)
    }

    // Recuperamos la información de cada archivo
    const filePromises = files.map(async file => {
        const filePath = join(folder, file)
        let stats
        // Obtenemos la información de cada archivo
        try {
            stats = await stat(filePath)
        } catch {
            console.log('No se pudo leer el archivo ', filePath)
            process.exit(1)
        }

        // Agrupamos la información en variables
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })
    console.log(promises)

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)