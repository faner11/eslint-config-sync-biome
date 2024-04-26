import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

function publish() {
  const v = execSync('npm view @biomejs/biome version').toString().replace('\n', '')
  const text = readFileSync('./package.json', 'utf8')
  const json = JSON.parse(text)
  json.version = v
  writeFileSync('./package.json', JSON.stringify(json, null, 2))
  // execSync('npm publish')
}

publish()
