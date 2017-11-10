var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var libroSchema = new Schema({
	titulo: {type:String},
	autor:  {type:String}, //autor: {type: Schema.ObjectId, ref:"Autor", require:true},
	anio: {type:Number},
	genero: {type:String}
});

/*var autorSchema = new Schema({
	nombre: {type:String},
	apellido: {type:String},
	//pais: {type:String}
	libro:{type: Schema.ObjectId, ref:"Libro"}//Libros:[Model.Libro]//***
});

module.exports = mongoose.model('autor',autorSchema);*/
module.exports = mongoose.model('Libro',libroSchema);