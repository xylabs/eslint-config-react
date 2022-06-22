// eslint-disable-next-line import/no-nodejs-modules
import { cwd } from 'process'

export = {
  extends: ['@xylabs', './react'],
  parserOptions: { tsconfigRootDir: cwd() },
}
