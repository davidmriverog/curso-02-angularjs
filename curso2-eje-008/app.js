angular.module("MyApp",['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
	  .when('/',{
	    templateUrl: 'inicio.html',
	  })
	  .when('/tareas',{
	    templateUrl: 'tareas.html',
	  })
	  .when('/empleados',{
	    templateUrl: 'empleados.html',
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
  })
  .controller("FormController",function($scope){

  });
