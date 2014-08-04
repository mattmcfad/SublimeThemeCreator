(function() {
  var app;

  app = angular.module('EditorApp', []);

  app.controller('themeEditor', function() {
    this.theme = 'test';
    this.setTheme(input)(function() {
      this.theme = input;
    });
  });

}).call(this);
