module.exports = {
  paths: { public: 'public', watched: ['app', 'node_modules/nio-scss/scss'] },
  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },
  server: {
    hostname: '0.0.0.0',
    port: 8080,
    noPushState: true,
  },
  plugins: {
    eslint: {
      pattern: /^app\/.*\.js$/
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 2 versions'])
      ]
    },
    sass: {
      mode: 'native',
      options: { includePaths: ['node_modules/nio-scss/scss'] },
      functions: require('nio-scss')
    },
    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: { enableProcessor: true, helpers: require('./helpers/hbs') },
          processors: [ require('marked-brunch-static')() ]
        })
      ]
    }
  }
}
