const server = require('./server.js');
const request = require('supertest');

const db = require('../data/dbConfig.js');
const testUser = { username: 'test', password: 'password' };

describe('server.js', () => {
	it('it should return status code 200', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
    });
    
	it("it should return 'text/html in charset utf-8'", async () => {
		const res = await request(server).get('/');
		expect(res.get('Content-Type')).toEqual('text/html; charset=utf-8');
	});
});
