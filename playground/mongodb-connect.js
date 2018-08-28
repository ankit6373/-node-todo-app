const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB server');
	
	
	const database = db.db('Todos')
	
	database.collection('Todos').insertOne({
		text: 'Eat Lunch',
        comepleted: true		
	},(err,result) =>{
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops));
	});
	
	
	//Insert new doc into Users (name,age,location)
	
	database.collection('Users').insertOne({
		name: 'Priya',
		age : 20,
		location: 'jalandhar'
	},(err,result) =>{
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops));
	});
	
	db.close();
});