module.exports = {
  plugins: {
    // postcss-selector-namespace: 给所有css添加统一前缀，然后父项目添加命名空间
    'postcss-selector-namespace': {
      namespace(css) {
        // 指定的样式可以不需要添加命名空间
        // if (css.includes('')) return '';
        return '#vueSpaApp' // 返回要添加的类名
      }
    },
  }
}