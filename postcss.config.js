module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 16, // 換算的基數
      selectorBlackList: ["weui", "mu"], // 忽略轉換正則匹配項
      propList: ["*"]
    }
  }
};
