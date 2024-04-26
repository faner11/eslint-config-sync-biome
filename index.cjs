const ruleMaps = require('./rules.cjs')

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
