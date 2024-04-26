const biomeRules = require('./rules.cjs')
const { rules } = require('eslint-config-prettier')

const ruleMaps = {
  ...biomeRules,
  ...rules,
}
module.exports = {
  configs: {
    recommended: {
      plugins: ['biome'],
      rules: ruleMaps,
    },
    'flat/recommended': {
      rules: ruleMaps,
    },
  },
}
