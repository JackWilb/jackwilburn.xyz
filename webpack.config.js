const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => ({
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.prod },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
});
