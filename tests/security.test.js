/* eslint-env jest */
const request = require("supertest");
const app = require("../index");

describe("Sécurité - Entrées malveillantes", () => {
  it("devrait refuser une requête contenant un script malicieux", async () => {
    const res = await request(app).get("/?name=<script>alert('hack')</script>");
    expect(res.statusCode).toBe(400); // ou autre code si tu gères différemment
    expect(res.text).not.toContain("<script>");
  });

  it("devrait ne pas crasher si l'utilisateur envoie une grosse requête", async () => {
    const longString = "A".repeat(10000);
    const res = await request(app).get(`/?name=${longString}`);
    expect(res.statusCode).toBeLessThan(500); // pas d'erreur serveur
  });
});
