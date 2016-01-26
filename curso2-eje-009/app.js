angular.module('MyApp', [])
  .directive('miEncabezado',function(){

    return {
      templateUrl: 'mi-encabezado.html',

    };
  })
  .controller('AppController',function($scope){

    $scope.texto = {
      titulo: 'Mi titulo',
      subtitulo: 'David Rivero'
    };


  });