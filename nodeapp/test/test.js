var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with EG/2020/3905', function(done) {
        request(app).get('/will').expect('{ "response": "EG/2020/3905" }', done);
    });
});