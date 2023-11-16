const http = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const server = require('./app');

chai.use(chaiHttp);

describe('HTTP Server', () => {
  it('should return "Hello, World!" when GET /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!\n');
        done();
      });
  });
});
