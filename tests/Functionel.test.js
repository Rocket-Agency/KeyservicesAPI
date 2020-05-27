const app = require('../server');
const request = require('supertest');

module.exports = app;

describe('Test add data to api', () => {
  it('should create a new user with role proprietaire', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        first_name: 'Djamel',
        last_name: 'Bougouffa',
        birth: '2020-03-24',
        sexe: 'homme',
        photo: 'test.png',
        email: 'dbougouffa@gmail.com',
        password: 'djamel',
        adresse: '3 rue des petites couronnes',
        groups: ["admin"]
      })
    expect(res.statusCode)
    expect(res.body)
  })
})

describe('Test add data to api', () => {
  it('Login a user', async () => {
    const res = await request(app)
      .post('/api/auth/signin')
      .send({
        email: 'dbougouffa@gmail.com',
        password: 'djamel',
      })
    expect(res.statusCode)
    expect(res.body)
  })
})

describe('Test add data to api', () => {
  it('Update password', async () => {
    const res = await request(app)
      .put('/api/user/update/password/')
      .send({
        passwordcurrent: 'djamel',
        passwordnew: 'test'
      })
    expect(res.statusCode)
    expect(res.body)
  })
})

describe('Test add data to api', () => {
  it('Reset password', async () => {
    const res = await request(app)
      .post('/api/auth/resetpassword')
      .send({
        email: 'dbougouffa@gmail.com'
      })
    expect(res.statusCode)
    expect(res.body)
  })
})

describe('Test add data to api', () => {
  it('Contact message', async () => {
    const res = await request(app)
      .post('/api/contact/creat')
      .send({
        first_name : 'Djamel',
        last_name : 'Bougouffa',
        email : 'dbougouffa@gmail.com',
        object : 'Information sur Keyservices',
        message : "J'aimerais avoir des informations concernant la non publication de mon annonce...z",
      })
    expect(res.statusCode)
    expect(res.body)
  })
})