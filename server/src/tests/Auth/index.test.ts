// jest.setTimeout(30000);

import * as request from 'supertest';
import app from '../../app';

test('Should create unique user', async () => {
  await request(app)
    .post('/auth/register')
    .send({
      name: 'Lahori',
      username: 'lj',
      email: 'lahori@jawan.com',
      password: '123456',
    })
    .expect(201);
});

test('Should not create same user', async () => {
  await request(app)
    .post('/auth/register')
    .send({
      name: 'Lahori',
      username: 'lj',
      email: 'lahori@jawan.com',
      password: '123456',
    })
    .expect(400);
});

test('Should login a user', async () => {
  await request(app)
    .post('/auth/login')
    .send({
      email: 'lahori@jawan.com',
      password: '123456',
    })
    .expect(200);
});

test('Should not login a user that does not exist', async () => {
  await request(app)
    .post('/auth/login')
    .send({
      email: 'dummy@demo.com',
      password: 'nopass',
    })
    .expect(400);
});

test('Should not create a user with missing credentials', async () => {
  await request(app)
    .post('/auth/register')
    .send({
      name: 'Lahori',
      email: 'lahori@jawan.com',
    })
    .expect(400);
});

test('Should not login a user with missing credentials', async () => {
  await request(app)
    .post('/auth/login')
    .send({
      email: 'lahori@jawan.com',
    })
    .expect(400);
});
