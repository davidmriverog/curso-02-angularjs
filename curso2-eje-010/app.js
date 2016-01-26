angular.module("MyApp",['ngRoute'])
  .config(function($routeProvider){

    $routeProvider
    .when('/',{
      templateUrl: 'views/inicio.html',
    })
    .when('/listartareas',{
      templateUrl: 'views/listartareas.html',
      controller: 'listarTareasController'
    })
    .when('/creartareas',{
      templateUrl: 'views/creartareas.html',
      controller: 'crearTareasController'
    })
    .otherwise({
      redirectTo: '/'
    });
    
  })
  .controller("listarTareasController",function($scope,$http){

    $scope.tareas = [];

    $(document).ready(function(){

      $http.get('http://localhost/curso-02-angularjs/curso2-eje-010/data.php',{
        params:{ 
          op: "listar-tareas"
        }
      })
      .success(function(data) {
        $scope.tareas = eval(data);
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    });
  })
  .controller("crearTareasController",function($scope,$http){

  });