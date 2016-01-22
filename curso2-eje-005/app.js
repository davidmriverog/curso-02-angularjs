angular.module("MyApp",[])
  .factory("MyFactory",function(){
    return {mensaje: "Saludos desde el factory "};
  })
  .controller("ControllerUno",function($scope,MyFactory){
    $scope.dato = MyFactory;
  })
  .controller("ControllerDos",function($scope,MyFactory){
    $scope.dato = MyFactory;
  });
