import supertest from 'supertest';
import app from "../app.js";

const request = supertest(app);

describe("Test the endpoints result status", () => {
  it("should return status 200 for Homepage", async () => {
    const response = await request.get("/")
    expect(response.status).toEqual(200);
  });
  it("should return status 200 if valid cityName provided", async () => {
    const cityName = {'cityName': "Amsterdam"}
    const response = await request.post("/weather").send(cityName)
    // const data = JSON.parse(response.text);
    expect(response.status).toEqual(200);
  });
  it("should return status 404 if invalid cityName provided", async () => {
    const cityName = {"cityName": "safsf"}
    const response = await request.post("/weather").send(cityName)
    // const data = JSON.parse(response.text);
    expect(response.status).toEqual(404);
  });
  it("should return status 400 if no cityName provided", async () => {
    const cityName = {"cityName": ""}
    const response = await request.post("/weather").send(cityName);
    // const data = JSON.parse(response.text);
    expect(response.status).toEqual(400);
  });
});