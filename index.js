import biomeRules from './rules.js'
import eslintConfigPrettier from 'eslint-config-prettier'

const { rules: prettierRules } = eslintConfigPrettier
const ruleMaps = {
  ...biomeRules,
  ...prettierRules,
}
export default {
  configs: {
    recommended: {
      plugins: ['biome'],
      rules: ruleMaps,
    },
    'flat/recommended': {
      rules: ruleMaps,
    },
    'flat/only-linter': {
      rules: biomeRules,
    },
  },
}
