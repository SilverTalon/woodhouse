'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,
    colors: true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/!(*Spec).js': ['coverage'],
      'src/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'templates'
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'text-summary',
      dir : 'coverage/'
    }
  });
};
