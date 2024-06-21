import { writeFileSync } from 'node:fs'
import { setGlobalDispatcher, ProxyAgent } from 'undici'

if (process.env.https_proxy) {
  // Corporate proxy uses CA not in undici's certificate store
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const dispatcher = new ProxyAgent({ uri: new URL(process.env.https_proxy).toString() })
  setGlobalDispatcher(dispatcher)
}
// https://github.com/biomejs/biome/blob/main/crates/biome_cli/src/execute/migrate/eslint_any_rule_to_biome.rs
const fileUrl =
  'https://raw.githubusercontent.com/biomejs/biome/main/crates/biome_cli/src/execute/migrate/eslint_any_rule_to_biome.rs'

async function generateFile(fileUrl: string) {
  const text = await fetch(fileUrl).then((res) => res.text())

  const regExp = /"(.*?)"/g

  const list = text.match(regExp)?.map((p) => {
    return p.replace(/"/g, '')
  })

  const ruleMap = list?.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue] = 'off'
      return accumulator
    },
    {} as Record<string, string>,
  )

  const mjsCode = `
  export default ${JSON.stringify(ruleMap, null, 2)}
  `

  const cjsCode = `
  module.exports = ${JSON.stringify(ruleMap, null, 2)}
  `
  writeFileSync('./rules.js', mjsCode)
  writeFileSync('./rules.cjs', cjsCode)
}

generateFile(fileUrl)
