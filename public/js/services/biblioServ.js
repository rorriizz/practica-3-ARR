angular.module('servicios.biblioteca',[])
	.factory('Libro',Libro);	//Los modelos se crean por fabricas

	function Libro($http){
		var l = {
			libros : []
		};
//Cargar libros
		l.getLibros = function(){
			return $http.get('/libros')
					.then(function(res){ //exito
						console.log(res.data);
						//l.libros = res.data;
						angular.copy(res.data,l.libros);
					}, function(res){	//error
						console.log('error: '+res.statusText);
					});
		};
//POST
		l.addLibro = function(nuevo){
			return $http.post('/libros',nuevo)
							.then(function(res){
								l.libros.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		//*******************Practica 3*******************//
//GET by id
		l.getById = function(id){
			return $http.get('/libros/'+ id)
					.then(function(res){ //exito
						console.log(res.data);
						//l.libros = res.data;
						angular.copy(res.data,l.libros);
					}, function(res){	//error
						console.log('error: '+res.statusText);
					});
		};

//UPDATE 
		l.updateLibro = function(libro){
			return $http.put('/libros/'+libro._id, libro)
					.then(function(res){ //exito
						console.log("Datos");
						console.log(res.data);
						//l.libros = res.data;
						//angular.copy(res.data,l.libros._id);
					}, function(res){	//error
						console.log('error: '+res.statusText);
					});
		};

//DELETE
		l.deleteLibro = function(id){
			return $http.delete('/libros/'+id)
					.then(function(res){ //exito
						console.log(res.data);
						//l.libros = res.data;
						//angular.copy(res.data,l.libros._id);
					}, function(res){	//error
						console.log('error: '+res.statusText);
					});
		};





		return l;
	};