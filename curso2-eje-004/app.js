angular.module("MyApp",[])
  .controller("MyController",function($scope){
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
  });