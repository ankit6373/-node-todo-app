const MongoClient = require('mongodb').MongoClient;

var dburl = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(dburl,(err,db) =>{
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB server');
	const database = db.db('Todos')
	
	//delete Many -- It deleted all objects with matching criteria
	/*
	database.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
		console.log(result);
	});
    */
	
	// deleteOne --It deletes only the first object with the matchin criteria
	/*
	database.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
		console.log(result);
	});
	*/
	//findOneandDelete -- It also deletes only one and also returns back the deleted object data
	
	database.collection('Todos').findOneAndDelete({
		comepleted: true
		}).then((results) =>{
		console.log(JSON.stringify(results,undefined,2));
	});
	
	
	db.close();
	
});