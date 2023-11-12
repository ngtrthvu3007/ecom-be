import request from "supertest";
import { app } from "../src/index";

describe("GET /products", () => {
  it("should return all product", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(res.result.products).toBe(expect.arrayContaining());
  });
});

describe("GET /products/:id", () => {
  it("should return a product", async () => {
    const res = await request(app).get("/products/654149cd4cdce3e4fd519da9");
    expect(res.statusCode).toBe(200);
    expect(res.result.product.name).toBe("Iphone 14 128gb");
  });
});

describe("POST /products", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/products").send({
      sku: "product-test",
      name: "Product Test",
      image: "https://shopdunk.com/images/thumbs/0022756_imac-m3-2023-24-inch-8-core-gpu8gb256gb_240.jpeg",
      type: "macbook",
      price: 48990000,
      count_in_stock: 1000,
      rating: 0,
      description: "Product Test",
    });
    expect(res.statusCode).toBe(200);
    expect(res.result.product.name).toBe("Product Test");
  });
});

describe("PUT /products/:id", () => {
  it("should update a product", async () => {
    const res = await request(app).patch("/products/654149cd4cdce3e4fd519da9").send({
      name: "Product 4",
      price: 104,
      description: "Description 4",
    });
    expect(res.statusCode).toBe(200);
    expect(res.result.product.price).toBe(104);
  });
});

describe("DELETE /products/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app).delete("/products/654149cd4cdce3e4fd519da9");
    expect(res.statusCode).toBe(204);
  });
});
