const app = require('../../../src/api');
const request = require('supertest');

test('POST /analyze returns 200 with results', async () => {
    const body = {
        text: 'this is a text. 10.1',
        searchKeywords: 'this,is',
    };

    const actualResponse = await request(app)
        .post('/.netlify/functions/api/analyze')
        .send(body);

    const expectedResponse = {
        language: {
            name: 'Scots',
            code: 'sco',
        },
        search: [
            {
                keyword: 'this',
                exact: {
                    sentences: ['this is a text'],
                },
                similar: {
                    sentences: [],
                },
            },
            {
                keyword: 'is',
                exact: {
                    sentences: ['this is a text'],
                },
                similar: {
                    sentences: ['this is a text'],
                },
            },
        ],
        characters: {
            array: {
                withoutWhiteSpace: {
                    array: [
                        '.',
                        '.',
                        '0',
                        '1',
                        '1',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 16,
                },
                withWhiteSpace: {
                    array: [
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        '.',
                        '.',
                        '0',
                        '1',
                        '1',
                        'a',
                        'e',
                        'h',
                        'i',
                        'i',
                        's',
                        's',
                        't',
                        't',
                        't',
                        'x',
                    ],
                    length: 20,
                },
            },
            map: {
                0: 1,
                1: 2,
                '.': 2,
                a: 1,
                e: 1,
                h: 1,
                i: 2,
                s: 2,
                t: 3,
                x: 1,
            },
        },
        specialChars: {
            array: [' ', ' ', ' ', '.', ' ', '.'],
            length: 6,
            map: {
                ' ': 4,
                '.': 2,
            },
        },
        words: {
            badWords: {
                array: [],
                length: 0,
            },
            length: 5,
            array: ['this', 'is', 'a', 'text', '10.1'],
            map: {
                this: 1,
                is: 1,
                a: 1,
                text: 1,
                10.1: 1,
            },
        },
        hashtags: {
            withHashChar: [],
            withoutHashChar: [],
        },
        mentions: {
            withAtChar: [],
            withoutAtChar: [],
        },
        sentences: {
            array: ['this is a text', '10.1'],
            length: 2,
        },
        numbers: {
            integers: {
                array: [],
                length: 0,
            },
            floats: {
                array: [10.1],
                length: 1,
            },
        },
    };

    expect(actualResponse.status).toBe(200);
    expect(actualResponse.body).toEqual(expectedResponse);
});

test('GET /analyze returns 405', async () => {
    const actualResponse = await request(app).get(
        '/.netlify/functions/api/analyze'
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

test('POST /analyze returns 400 with empty request', async () => {
    const actualResponse = await request(app).post(
        '/.netlify/functions/api/analyze'
    );

    const expectedResponse = {
        status: 'error',
        message: '<text> parameter is missing in the request of the body!',
    };

    expect(actualResponse.status).toBe(400);
    expect(actualResponse.body).toEqual(expectedResponse); // replace with the expected length of the list of users
});
