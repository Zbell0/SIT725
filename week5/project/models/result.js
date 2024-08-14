const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://but05051:RRyCZ2G76zxLTPnT@cluster0.xvvnnuj.mongodb.net/math?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongo() {
  await client.connect();
  console.log('Connected to MongoDB Atlas');
}

connectToMongo();

const storeResults = async (num1, num2, sum) => {
  const database = client.db('math');
  const collection = database.collection('results');
  const result = await collection.insertOne({ num1, num2, sum });
  return result.insertedId;
};

const getResults = async () => {
  const database = client.db('math');
  const collection = database.collection('results');
  const results = await collection.find({}).toArray();
  return results;
};

module.exports = {
  connectToMongo,
  storeResults,
  getResults,
};
