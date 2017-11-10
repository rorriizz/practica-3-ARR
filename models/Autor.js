var mongoose=require('mongoose');
var Schema = mongoose.Schema;
//var Libro = mongoose.model('Libro');//********


var autorSchema = new Schema({
	nombre: {type:String},
	apellido: {type:String},
	//pais: {type:String}
	libro: {type:String}//{type: Schema.ObjectId, ref:"Libro", require:true}//Libros:[Model.Libro]
});

module.exports = mongoose.model('Autor',autorSchema);