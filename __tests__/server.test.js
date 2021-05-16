  
'use strict';
const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server', () => {
    it(' 404 status', async () => {
        const response = await request.get('/randomRout');
        expect(response.status).toBe(404);
    });

    it('show the welcome', async () => {
        let route = '/';
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('welcome to Home Page');
    });

    it('should get an errors', async () => {
        const response = await request.get('/wrong');
        expect(response.status).toEqual(500);
    });


});