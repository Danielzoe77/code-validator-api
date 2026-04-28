import request from "supertest";
import {createApp} from "../app";

/**
 * Integration test to verify that the card validation
 * endpoint correctly validates card numbers using the Luhn algorithm.
 */
describe("POST /api/cards/validate", () => {
  it("should validate a correct card number", async () => {
    const validCard = "4539578763621486"; // Valid VISA test number

    const res = await request(createApp())
    
      .post("/api/cards/validate")
      .send({ cardNumber: validCard });

    expect(res.status).toBe(200);
    expect(res.body.valid).toBe(true);
  });

  it("should return false for invalid card number", async () => {
    const res = await request(createApp())
      .post("/api/cards/validate")
      .send({ cardNumber: "123456789" });

    expect(res.status).toBe(200);
    expect(res.body.valid).toBe(false);
  });

  it("should handle missing input", async () => {
    const res = await request(createApp())
      .post("/api/cards/validate")
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("cardNumber is required");
  });
});