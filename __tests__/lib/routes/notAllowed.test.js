const app = require('../../../src/api');
const request = require('supertest');

test('GET /* returns 405', async () => {
    const actualResponse = await request(app).get('/.netlify/functions/api/');
    
    const expectedResponse = {
        status: 'error',
        message: 'method is not allowed',
        detail: {
            method: 'GET',
            body: {},
        },
    };

    expect(actualResponse.status).toBe(405);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});

test('POST /* returns 405', async () => {
    const actualResponse = await request(app).get('/.netlify/functions/api/');
    
    const expectedResponse = {
        status: 'error',
        message: 'method is not allowed',
        detail: {
            method: 'GET',
            body: {},
        },
    };

    expect(actualResponse.status).toBe(405);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});
