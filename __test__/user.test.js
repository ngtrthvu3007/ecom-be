import request from "supertest";
import { app } from "../src/index";

describe("GET /users/my-profile", () => {
  it("should return a profile", async () => {
    const res = await request(app)
      .get("//users/my-profile")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjp7InVzZXJfaWQiOiI2NTM1NzU3NzU5MGNjOGFhZTc1MjlkMTYifSwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwiaWF0IjoxNjk4MDgwNzI5LCJleHAiOjE2OTgzMzk5Mjl9.ZhPmm4MxrlKTRU_lLKuShzIiuzWwpxhIL3z0PeLjqEg"
      );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("admin");
  });
});
