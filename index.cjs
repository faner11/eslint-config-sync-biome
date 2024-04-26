const ruleMaps = require('./rules.cjs')

module.exports = {
  configs: {
    recommended: {
      plugins: ['oxlint'],
      rules: ruleMaps,
    },
    'flat/recommended': {
      rules: ruleMaps,
    },
  },
}
