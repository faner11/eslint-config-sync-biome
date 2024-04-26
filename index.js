import ruleMaps from './rules.js'

export default {
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
