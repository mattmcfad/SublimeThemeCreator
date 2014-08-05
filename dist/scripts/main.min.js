(function() {
  var app;

  app = angular.module('ThemeEditorApp', []);

  app.controller('themeEditor', function() {
    this.theme = 'test';
    this.setTheme(input)(function() {
      this.theme = input;
    });
  });

}).call(this);
