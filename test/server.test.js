/* eslint-env jest */
const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("devrait retourner un code 200 et contenir du HTML", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("<!DOCTYPE html>");
  });
});
