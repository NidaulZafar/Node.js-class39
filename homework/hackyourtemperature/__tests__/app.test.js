import supertest from 'supertest';
import app from "../app.js";

const request = supertest(app);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
});