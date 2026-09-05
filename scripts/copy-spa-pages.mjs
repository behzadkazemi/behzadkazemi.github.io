import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const html = readFileSync(resolve(dist, 'index.html'), 'utf8')

mkdirSync(resolve(dist, 'bmi-calculator'), { recursive: true })
writeFileSync(resolve(dist, 'bmi-calculator/index.html'), html)
writeFileSync(resolve(dist, '404.html