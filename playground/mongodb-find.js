const MongoClient = require('mongodb').MongoClient;

var dburl = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(dburl,(err,db) =>{
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB server');
	const database = db.db('Todos')
	
	database.collection('Todos').find().toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to reach todos',err)
	});
	
	db.close();
	
});