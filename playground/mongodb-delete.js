const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');

  const db = client.db('TodoApp');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Pritam Dalal'}).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5af738d6473f8613d4026033')}).then((result)=> {
    console.log(result);
  });

  //client.close();
});
