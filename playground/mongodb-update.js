const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');

  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af73eb6473f8613d4026288')
  }, {
    $set: {
      name: 'Santanu Das'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });

  //client.close();
});
