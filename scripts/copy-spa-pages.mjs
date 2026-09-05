import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const html = readFileSync(resolve(dist, 'index.html'), 'utf8')

mkdirSync(resolve(dist, 'bmi-calculator'), { recursive: true })
writeFileSync(resolve(dist, 'bmi-calculator/index.html'), html)
mkdirSync(resolve(dist, 'weather-app'), { recursive: true })
writeFileSync(resolve(dist, 'weather-app/index.html'), html)
mkdirSync(resolve(dist, 'ito-ito-challenge'), { recursive: true })
writeFileSync(resolve(dist, 'ito-ito-challenge/index.html'), html)
for (const page of ['random-movie-adviser', 'imdb-top-250', 'game-of-thrones', 'harry-potter']) {
	mkdirSync(resolve(dist, page), { recursive: true })
	writeFileSync(resolve(dist, page, 'index.html'), html)
}
writeFileSync(resolve(dist, '404.html'), html)
