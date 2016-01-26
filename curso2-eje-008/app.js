angular.module("MyApp",['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
	  .when('/',{
	    templateUrl: 'inicio.html'
	  })
	  .when('tareas',{
	    templateUrl: 'tareas.html',
		  controller: 'FormTareasController'
	  })
	  .when('empleados',{
	    templateUrl: 'empleados.html',
		  controller: 'FormEmpleadosController'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
  })
  .controller("FormEmpleadosController",function($scope){
    $scope.empleados = [
       {
        nombre: "David Miguel",
        apellidos: "Rivero Guite",
        primerDia: new Date(),
        salario: 45000,
        telefono: "424 5449794",
        bono: 30.4
       },
       {
        nombre: "Yrma",
        apellidos: "Guite",
        primerDia: new Date(),
        salario: 20000,
        telefono: "424 5449794",
        bono: 15
       },
       {
        nombre: "Davidmar",
        apellidos: "Rivero Guite",
        primerDia: new Date(),
        salario: 60000,
        telefono: "424 5449794",
        bono: 30
       },
       {
        nombre: "David Jonathan",
        apellidos: "Rivero",
        primerDia: new Date(),
        salario: 85000,
        telefono: "424 5449794",
        bono: 20
       }
     ];

     $scope.ordernarPor = function(criterio){

        $scope.ordenSeleccionado = criterio;
     };
  })
  .controller("FormTareasController",function($scope){
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
