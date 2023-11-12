import request from "supertest";
import { app } from "../src/index";

describe("GET /orders", () => {
  it("should return all orders", async () => {
    const res = await request(app).get("/orders");
    expect(res.statusCode).toBe(200);
    expect(res.result.orders).toBe(expect.arrayContaining());
  });
});

describe("GET /orders/:id", () => {
  it("should return a order", async () => {
    const res = await request(app).get("/orders/654149cd4cdce3e4fd519da9");
    expect(res.statusCode).toBe(200);
    expect(res.result.order.name).toBe(expect.objectContaining());
  });
});
