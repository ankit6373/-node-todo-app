const MongoClient = require('mongodb').MongoClient;

var dburl = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(dburl,(err,db) =>{
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB server');
	const database = db.db('Todos')
	
    database.collection('Users').findOneAndUpdate({
		name: 'Cheenu'
		//location: 'Jalandhar'
	},{
		$set:{
			age: 40
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
		
	//db.close();
	
});