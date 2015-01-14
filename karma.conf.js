'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    preprocessors: {
      'src/**/!(*Spec).js': ['coverage']
    },

    reporters: ['coverage'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    }
  });
};
