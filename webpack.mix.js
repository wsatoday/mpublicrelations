const mix = require('laravel-mix')

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: Config.babel()
          }
        ]
      }
    ]
  }
})

mix.js('src/scripts/app.js', 'public/client/scripts/')
mix.sass('src/styles/app.scss', 'public/client/styles/')
mix.copyDirectory('src/images', 'public/client/images')
