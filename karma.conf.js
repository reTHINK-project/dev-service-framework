module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './test/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      './test/*.spec.js': ['webpack']
    },

    // webpack configuration
    webpack: require('./webpack.config.js'),
    reporters: ['mocha'],

    client: {
      mocha: {
        reporter: 'html'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeTravis'],
    customLaunchers: {
      ChromeTravis: {
        base: 'Chrome',
        flags: [
          '--disable-web-security',
          '--ignore-certificate-errors'
        ]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
