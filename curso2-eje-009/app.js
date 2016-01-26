angular.module('MyApp', [])
  .directive('miEncabezado',function(){

    return {
      restrict: 'E',
      templateUrl: 'mi-encabezado.html',
      scope: {
        textoVariable: '=texto',

      }

    };
  })
  .controller('AppController',function($scope){

    $scope.texto1 = {
      titulo: 'Mi titulo 1',
      subtitulo: 'David Rivero'
    };

     $scope.texto2 = {
      titulo: 'Mi titulo 2',
      subtitulo: 'David Rivero'
    };
  });