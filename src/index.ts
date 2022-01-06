// eslint-disable-next-line import/no-internal-modules
import '@rushstack/eslint-patch/modern-module-resolution'

import { cwd } from 'process'

export = {
  extends: ['@xylabs', './react'],
  parserOptions: { tsconfigRootDir: cwd() },
}
