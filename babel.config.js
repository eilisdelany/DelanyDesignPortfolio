module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: '> 0.5%, last 2 versions, Firefox ESR, not dead',
            node: '8.9'
          },
          debug: true
        }
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build'
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import', '@babel/transform-runtime'],
    env: {
      build: {
        ignore: ['**/*.spec.tsx', '**/*.spec.ts', '**/*.stories.tsx']
      }
    },
    ignore: ['node_modules']
  }
}
