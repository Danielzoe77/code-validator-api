import type { Request, Response, NextFunction } from "express";
import { validateCard } from "../services/cardService";

/**
 * Controller responsible for handling POST card validation requests.
 * It receives the card number from the request body and returns
 * whether it is valid or not.
 */
// export default function validateCard(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { cardNumber } = req.body;

//     if (!cardNumber) {
//       return res.status(400).json({
//         success: false,
//         message: "cardNumber is required"
//       });
//     }

//     const isValid = validateCardNumber(cardNumber);

//     return res.status(200).json({
//       success: true,
//       valid: isValid
//     });
//   } catch (err) {
//     next(err);
//   }
// }


// const { validateCard } = require("../services/service");
//import type { Request, Response } from "express";

export function validateCardController(req: Request, res: Response) {
  const { cardNumber } = req.body;

  // 1. Check if field exists
  if (!cardNumber) {
    return res.status(400).json({ error: "cardNumber is required" });
  }

  // 2. Ensure it is a string
  if (typeof cardNumber !== "string") {
    return res.status(400).json({ error: "cardNumber must be a string" });
  }

  // 3. Reject spaces
  if (cardNumber.includes(" ")) {
    return res.status(400).json({ error: "Invalid card details: spaces are not allowed" });
  }

  // 4. Reject letters or symbols — must contain only digits
  if (!/^\d+$/.test(cardNumber)) {
    return res.status(400).json({ error: "Invalid card details: only digits allowed" });
  }

  // 5. Must be exactly 16 digits
  if (cardNumber.length !== 16) {
    return res.status(400).json({
      error: "Invalid card details: card number must be exactly 16 digits"
    });
  }

  // 5. Perform actual card validation
  const result = validateCard(cardNumber);

  return res.status(result.valid ? 200 : 400).json(result);
}
// module.exports = { validateCardController };