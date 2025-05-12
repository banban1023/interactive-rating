module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 1rem = 16px
      propList: ['*'], // 所有属性都转换
      exclude: /node_modules/i
    }
  }
}