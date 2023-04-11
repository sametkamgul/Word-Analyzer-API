const app = require('../../../src/api');
const request = require('supertest');

test('GET /update returns 405', async () => {
    const actualResponse = await request(app).get(
        '/.netlify/functions/api/update'
    );

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

test('POST /update returns 400 for empty body', async () => {
    const actualResponse = await request(app).post(
        '/.netlify/functions/api/update'
    );

    const expectedResponse = {
        status: 'error',
        message: '<text> parameter is missing in the request of the body!',
    };

    expect(actualResponse.status).toBe(400);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});

test('POST /update returns 200 with results - remove feature', async () => {
    const body = {
        text: 'It is a text with #hashtag with 2 #one. 1.6. Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.',
        keywords: 'a,i',
    };

    const actualResponse = await request(app)
        .post('/.netlify/functions/api/update')
        .send(body);

    const expectedResponse = {
        keywords: 'a,i',
        text: 'It s  text wth #hshtg wth 2 #one. 1.6. Even wth the thrd one #forllworld. And I hve 100.5 dollrs nd 5 pennes.',
    };

    expect(actualResponse.status).toBe(200);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});

test('POST /update returns 200 with results - replace feature', async () => {
    const body = {
        text: 'It is a text with #hashtag with 2 #one. 1.6. Even with the third one #forallworld. And I have 100.5 dollars and 5 pennies.',
        keywords: 'a,i',
        newKeyword: '*',
    };

    const actualResponse = await request(app)
        .post('/.netlify/functions/api/update')
        .send(body);

    const expectedResponse = {
        keywords: 'a,i',
        newKeyword: '*',
        text: 'It *s * text w*th #h*sht*g w*th 2 #one. 1.6. Even w*th the th*rd one #for*llworld. And I h*ve 100.5 doll*rs *nd 5 penn*es.',
    };

    expect(actualResponse.status).toBe(200);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});
