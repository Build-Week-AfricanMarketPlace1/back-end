const server = require("./server.js");
const request = require("supertest");

const db = require("../data/dbConfig.js");
const testUser = { username: "test", password: "password" };

describe("server.js", () => {
    it("it should return status code 200", () => {
        const res = await request(server).get("/");
        expect(res.status).toBe(200);
    });

    it("it should return 'server is running!'", () => {
        const res = await request(server).get("/");
        expect(res.send).toEqual("Server is running!");
    });
})