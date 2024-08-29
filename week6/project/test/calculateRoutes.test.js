import * as chaiModule from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';
const chai = chaiModule.use(chaiHttp);
const { expect } = chai;

describe('API Endpoint Tests', () => {
  // Test1 - check if successfully storring user input (num1,num2,sum in local database)
  describe('POST /api/calculate/storeResult', () => {
    it('should store a result and return the resultId', async () => {
      const res = await chai
        .request(app)
        .post('/api/calculate/storeResult')
        .send({ num1: 5, num2: 10, sum: 15 });

      console.log('POST Status:', res.status);
      console.log('POST Response body:', res.body);

      expect(res).to.have.status(200);
      expect(res.body)
        .to.have.property('message')
        .eql('Result stored successfully');
      expect(res.body).to.have.property('resultId');
    });
  });

  // Test2 - check if successfully fetch the result of sum history
  describe('GET /api/calculate/result', () => {
    it('should retrieve all results in array form', async () => {
      const res = await chai.request(app).get('/api/calculate/result');

      console.log('GET Status:', res.status);
      console.log('GET Response body:', res.body);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  });

  //Test3 -chceck if retunring error for invalid input
  describe('POST /api/calculate/storeResult - Invalid Input', () => {
    it('should return an error for missing fields', async () => {
      const res = await chai
        .request(app)
        .post('/api/calculate/storeResult')
        .send({ num1: 5, num2: 10 });

      console.log('POST Status (Invalid Input):', res.status);
      console.log('POST Response body (Invalid Input):', res.body);

      expect(res).to.have.status(400);
      expect(res.body)
        .to.have.property('error')
        .eql('Required fields are missing');
    });
  });
});
