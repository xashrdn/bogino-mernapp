const app = require('../server');
const supertest = require('supertest');

beforeAll(async () => {
    console.log('im logging out before all of those functions execute');
});

afterAll(async () => {
    console.log('im logging out after all of those functions executed');
});

describe('start', () => {
    it('should create a new post', async () => {
        const result = await supertest(app).post('/user').send({
            email: ' tesst@gmail.com',
            password: '23454353454',
        });
        expect(result.status).toEqual(201);
    });
    it('should return a user', async () => {
        const res = await supertest(app).get('/users');
        expect(res.status).toEqual(200);
    });
});
