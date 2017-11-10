angular.module('controladores.biblioteca',['servicios.biblioteca'])
	.controller('LibroCtrl',LibroCtrl); //nombre del controlador, nombre de la función que implementa el controlador

function LibroCtrl($scope,Libro){
	$scope.titulo = 'Todo Libros';

	$scope.libro={};

	$scope.libros = Libro.libros;

	/*$scope.libros= [{
		titulo: 'El codigo da vinci',
		autor: 'Dan Brown',
		anio: 2015,
		genero: 'novela'
	},{
		titulo: 'Musica Acuatica',
		autor: 'Tc Boyle',
		anio: 2011,
		genero: 'novela'
	},{
		titulo: 'Hollywood',
		autor: 'Charles Bukowski',
		anio: 2015,
		genero: 'novela'
	}];*/

	$scope.addLibro = function(){
		//$scope.libros.push($scope.libro);
		Libro.addLibro($scope.libro);
		//$scope.libro = {};
	};

	$scope.getLibros = function(){
		Libro.getLibros();
		console.log(Libro.libros);
		$scope.libros = Libro.libros;
	};


	$scope.showLibro =function(l){
		$scope.libro=l;
	};

	//---------------Practica 3---------------
	$scope.getById = function(id){
		console.log('Hola getById');
		Libro.getById(id);
		console.log(Libro.libros);
		$scope.libros = Libro.libros;
	};
	
	$scope.updateLibro = function(libro){
		console.log('Hola update');
		Libro.updateLibro(libro);
		console.log(Libro.libros);
		Libro.getLibros();
		$scope.libros = Libro.libros;
		/*Libro.deleteLibro(id);
		Libro.addLibro($scope.libro);*/

	};

	$scope.deleteLibro = function(id){
		Libro.deleteLibro(id);//$scope.libro._id);
		console.log("letras"+id);
		console.log(Libro.libros);
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};
};