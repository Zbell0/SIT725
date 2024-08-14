const { storeResults, getResults } = require('../models/result');

const insterResult = async (req, res) => {
  const { num1, num2, sum } = req.body;
  const resultID = await storeResults(num1, num2, sum);
  res.status(200).json({
    message: 'Result stored successfully',
    resultId: resultID,
  });
};

const fetchResult = async (req, res) => {
  const results = await getResults();
  res.status(200).json(results);
};

module.exports = {
  insterResult,
  fetchResult,
};
