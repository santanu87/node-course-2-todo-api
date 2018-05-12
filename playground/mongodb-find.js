//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5af7065c3dbb7724e48f2e46')
  // }).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count)=> {
    console.log(`Todos count:${count}`);
  }, (err)=> {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({
    name: 'Pritam Dalal'
  }).toArray().then((docs)=> {
    console.log(JSON.stringify(docs, undefined,2));
  }, (err)=> {
      console.log('Unable to fetch users', err);
});
  //client.close();
});
