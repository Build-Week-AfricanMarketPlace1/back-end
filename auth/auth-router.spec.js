const auth = require('./auth-router.js');
const request = require('supertest');

const Users = require('../users/users-model.js');

const db = require('../data/dbConfig.js');
const testUser = {
	username: 'test',
	email: 'email@emailtest.com',
	password: 'password',
};

describe('Register user and authentication', () => {
	it('it should return user property.', async () => {
        const res = await request(auth).post('/api/auth/register');
        
        await Users.add(testUser);
        
        const users = await db('users').truncate();
        
        expect(res.body.username).toBe('test');
		// expect(users).toHaveProperty("username", 'test');
	});

	// it("it should return 'text/html in charset utf-8'", async () => {
	// 	const res = await request(server).get('/');
	// 	expect(res.get('Content-Type')).toEqual('text/html; charset=utf-8');
	// });
});
