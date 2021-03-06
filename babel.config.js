module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@src': './src',
            '@components': './src/components',
            '@screens': './src/sreens',
            '@assets': './src/assets',
            '@hooks': './src/hooks'
          }
        }
      ]
    ]
  }
}
