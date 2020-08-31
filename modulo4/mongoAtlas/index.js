
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminbd:mongo123@cluster0.r196i.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("grades").collection("student");
  // perform actions on the collection object

  //find documents
  const documents = await collection.find({city:"Paulinía"}).toArray();
  console.log(documents)

  //find documents
  const databaseList = await client.db().admin().listDatabases();
  // console.log('databaseList', databaseList)
  databaseList.databases.forEach(db => console.log(` -${db.name}`));

  client.close();
});
