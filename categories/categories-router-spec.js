const server = require('../api/server.js');
const request = require('supertest');


describe("categories", () => { 
    describe("GET request for items", () =>{
        it("should return 200 status code when not logged in", async () => {
            const res = await request(server).get("/api/categories");
            expect(res.status).toBe(200);
        })
        it("should return json", async() => {
            const res = await request(server).get("/api/categories");
            expect(res.type).toBe("application/json");
        });
    });

    // describe('items router', () => {
    //     describe('Get items'),
    // })


});