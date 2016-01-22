angular.module("MyApp",[])
  .factory("MyFactory",function(){

    var servicio = {
      objeto: {mensaje: "Saludos desde la fabrica"},
      fn_mensajeInicial: function(){
        servicio.objeto['mensaje'] = "Saludos desde la fabrica";
      },
      fn_mensajenuevo: function(msj){
        servicio.objeto.mensaje = msj;
      }
    };
    return servicio;
  })
  .controller("ControllerUno",function($scope,MyFactory){
    $scope.nuevo = function(){
      MyFactory.fn_mensajenuevo($scope.nuevoMensaje);
    };
    $scope.dato = MyFactory.objeto;
  })
  .controller("ControllerDos",function($scope,MyFactory){
    $scope.nuevo = function(){
      MyFactory.fn_mensajenuevo($scope.nuevoMensaje);
    };
    $scope.dato = MyFactory.objeto;
  })
  .controller("ControllerTres",function($scope,MyFactory){
    $scope.resetear = function(){
      MyFactory.fn_mensajeInicial();
    };
  });
