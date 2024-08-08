const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

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

app.post('/api/storeResult', async (req, res) => {
  const { num1, num2, sum } = req.body;

  const database = client.db('math');
  const collection = database.collection('results');
  const result = await collection.insertOne({ num1, num2, sum });

  res.status(200).json({
    message: 'Result stored successfully',
    resultId: result.insertedId,
  });
});

app.get('/api/results', async (req, res) => {
  const database = client.db('math');
  const collection = database.collection('results');
  const results = await collection.find({}).toArray();

  res.status(200).json(results);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
