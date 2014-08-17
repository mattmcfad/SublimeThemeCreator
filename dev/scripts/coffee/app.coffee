app = angular.module 'ThemeEditorApp', []

app.controller 'themeEditor', ['$scope', ($scope)->
  $scope.theme= 'test'
  $scope.setTheme(input) ->
    $scope.theme = input
    return
  return
]
