const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to local MongoDB');
  } catch (err) {
    console.error('Failed to connect to local MongoDB', err);
  }
}

const storeResults = async (num1, num2, sum) => {
  await connectToMongo();
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
