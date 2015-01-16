Woodhouse
============

Home Automation utilizing: Gulp, Bower, Angular and UI Bootstrap

[![Build Status](https://travis-ci.org/SilverTalon/woodhouse.svg)](https://travis-ci.org/SilverTalon/woodhouse)
[![Coverage Status](https://coveralls.io/repos/SilverTalon/woodhouse/badge.svg)](https://coveralls.io/r/SilverTalon/woodhouse)
[![Dependency Status](https://david-dm.org/SilverTalon/woodhouse.svg)](https://david-dm.org/SilverTalon/woodhouse)
[![devDependency Status](https://david-dm.org/SilverTalon/woodhouse/dev-status.svg)](https://david-dm.org/SilverTalon/woodhouse#info=devDependencies)


<br><br><br><br>


### Demo

https://silvertalon-woodhouse.herokuapp.com/#/


### Pre-requisites

Protractor requires on JDK to be installed for the Selenium server to run.

Ubuntu:
```
$ sudo apt-get install openjdk-7-jdk
```

### Install

Install the required tools: `gulp`, `bower`
```
$ npm install -g gulp bower
```

Install project tools:
```
$ npm install
```


### Helpful Tools

These two tools are very helpful for managing updates of both NPM and Bower components
```
$ npm install -g npm-check-updates bower-update
```




### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp wiredep` to fill bower dependencies in your `.html` file(s)
* `gulp test` to launch your unit tests with Karma
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

## Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application

## Features included in scaffolding
* *Angular modules*: animate, cookies, touch, sanitize
* *Resource handler*: ngResource
* *Router*: ngRoute
* *UI Framework*: UI Bootstrap
* *CSS pre-processor*: Sass with Node

## License

MIT
