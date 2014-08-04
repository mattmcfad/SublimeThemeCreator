app = angular.module 'EditorApp', []

app.controller 'themeEditor', ->
  @theme= 'test'
  @setTheme(input) ->
    @theme = input
    return
  return

