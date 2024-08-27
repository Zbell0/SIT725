import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

// Use chai with chaiHttp
chai.use(chaiHttp);

const { expect } = chai;

describe('API Endpoint Tests', () => {
  it('should return a 200 status and the correct response for the /api/calculate/result', async () => {
    const res = await chai
      .request(app)
      .post('/api/calculate/storeResult') // Replace with your actual endpoint
      .send({}); // Send any necessary data with the request

    console.log('Status:', res.status);
    console.log('Response body:', res.body);

    expect(res).to.have.status(200);
    // Add additional assertions as needed
  });
});
