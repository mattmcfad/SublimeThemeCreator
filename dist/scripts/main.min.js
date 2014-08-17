(function() {
  var app;

  app = angular.module('ThemeEditorApp', []);

  app.controller('themeEditor', [
    '$scope', function($scope) {
      $scope.theme = 'test';
      $scope.setTheme(input)(function() {
        $scope.theme = input;
      });
    }
  ]);

}).call(this);
