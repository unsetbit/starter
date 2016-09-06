var path = require('path');
var gulp = require('gulp');
var boilerplate = require('boilerplate-gulp');

boilerplate(gulp, {
  name: 'example',

  connect: {
    // The root directories to serve using the development server
    root: ['./example', './build']
  },

  js: {
    // The entry point of the CommonJS module
    entry: path.join(__dirname, 'src/starter.js'),

    // All JS files to be linted and included in coverage tests
    sources: path.join(__dirname, 'src/**/*.js'),

    // The Jasmine unit tests
    tests: path.join(__dirname, 'src/**/*Spec.js'),

    // The destination to put the built file
    dest: path.join(__dirname, 'build', 'js')
  },

  css: {
    // The entry point of the LESS module
    entry: path.join(__dirname, 'src/starter.less'),

    // The LESS files sources to lint
    sources: path.join(__dirname, 'src/**/*.less'),

    // The destination to put the built file
    dest: path.join(__dirname, 'build', 'css')
  }
});
