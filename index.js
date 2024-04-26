import biomeRules from './rules.js'
import { rules } from 'eslint-config-prettier'

const ruleMaps = {
  ...biomeRules,
  ...rules,
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
  },
}
