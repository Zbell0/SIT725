// routes/calculateRoutes.js
import * as result from '../models/result.js';

export const insterResult = async (req, res) => {
  const { num1, num2, sum } = req.body;

  // Validate input fields
  if (num1 === undefined || num2 === undefined || sum === undefined) {
    return res.status(400).json({
      error: 'Required fields are missing',
    });
  }

  try {
    const resultID = await result.storeResults(num1, num2, sum);
    res.status(200).json({
      message: 'Result stored successfully',
      resultId: resultID,
    });
  } catch (err) {
    res.status(500).json({
      error: 'An error occurred while storing the result',
    });
  }
};

export const fetchResult = async (req, res) => {
  try {
    const results = await result.getResults();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({
      error: 'An error occurred while fetching results',
    });
  }
};
