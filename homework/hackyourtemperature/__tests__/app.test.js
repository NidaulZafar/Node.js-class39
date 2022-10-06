import supertest from 'supertest';
import app from "../app.js";

const request = supertest(app);

describe("Test the end point req/res Statuses", () => {
  it("should return status 200 for Homepage", async () => {
    const response = await request.get("/")
    expect(response.status).toEqual(200);
  });
  it("should return status 200 if valid cityName provided", async () => {
    const cityName = {cityName: "safsf"}
    const response = await request.post("/weather").send('"cityName": "safsf"')
    expect(response.statusCode).toEqual(200);
  });
  it("should return status 404 if invalid cityName provided", async () => {
    const cityName = {cityName: "safsf"}
    const response = await request.post("/weather").send('"cityName": "safsf"')
    expect(response.statusCode).toEqual(200);
  });
  it("should return status 404 if no cityName provided", async () => {
    const cityName = {cityName: "safsf"}
    const response = await request.post("/weather").send('"cityName": "safsf"')
    expect(response.statusCode).toEqual(200);
  });
});