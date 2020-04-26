const supertest = require('supertest');
const app = require('../server');
const request = require('request');

module.exports = app;
// movies.spec.js
describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Post Endpoints', () => {
  it('should create a new user with role proprietaire', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        "first_name": "Djamel",
        "last_name": "Bougouffa",
        "birth": "2020-03-24",
        "sexe": "homme",
        "photo": "photo.png",
        "email": "djamel@test.com",
        "password": "djamel",
        "adresse": "dqzdqzdqdqd",
        "groups": ["proprietaire"]
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})