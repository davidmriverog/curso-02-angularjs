angular.module("MyApp",[])
  .controller("MyFirstController",function($scope){
    $scope.tareas = [
     {
       texto:"Analisis de la vista a nivel funcional",
       hecho:true
     },
     {
       texto:"implementar la plantilla para la nueva web",
       hecho:false
     },
     { 
       texto:"crear los controladores para cargar la data a nivel de rest",
       hecho:true
     }
    ];

    $scope.addTarea = function(){
      $scope.tareas.push(
        {
          texto: $scope.textoNuevaTarea,
          hecho: false
        }
      );

      $scope.textoNuevaTarea = "";
    };

    $scope.restantes = function(){
      var cuanta = 0;

      // contador de tareas ya finalizadas.
      angular.forEach($scope.tareas,function(tarea){
        cuanta += tarea.hecho ? 0 : 1;
      });

      return cuanta;
    };

    $scope.removerTarea = function(){
      var tareasViejas = $scope.tareas;

      $scope.tareas = [];

      angular.forEach(tareasViejas,function(tarea){
        if(!tarea.hecho){
          $scope.tareas.push(tarea);
        }
      });
    };

  });