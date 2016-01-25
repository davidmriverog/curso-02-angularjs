angular.module("MyApp",['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
	  .when('/',{
	    templateUrl: 'inicio.html',
	  })
	  .when('/tareas',{
	    templateUrl: 'tareas.html',
		controller: 'FormTareasController'
	  })
	  .when('/empleados',{
	    templateUrl: 'empleados.html',
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
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
  });
