// jest.setTimeout(30000);

import * as request from 'supertest';
import app from '../../app';

test('Should login a user', async () => {
  await request(app)
    .post('/auth/login')
    .send({
      email: 'dumm@demo.com',
      password: 'nopass',
    })
    .expect(400);
});
