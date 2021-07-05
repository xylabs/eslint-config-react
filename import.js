// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  plugins: ['import', 'simple-import-sort'],
  rules: {
    'import/no-internal-modules': [
      'warn',
      {
        allow: ['react-icons/*', '@material-ui/**/*', 'react-player/*'],
      },
    ],
  },
}
