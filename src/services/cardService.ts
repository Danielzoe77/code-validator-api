import { luhnCheck } from "../utils/luhnUtils";

/**
 * Service layer responsible for validating the card number.
 * This ensures that business logic is separated from request/response logic.
 */
// export function validateCardNumber(cardNumber: string): boolean {
//   const sanitized = cardNumber.replace(/\D/g, "");
//   return luhnCheck(sanitized);
// }

// const { luhnCheck } = require("../utils/luhn");

export function detectCardType(cardNumber: string): string | null {
  const patterns: Record<string, RegExp> = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
    Verve: /^(5061|6500|5078)\d{12,15}$/,
    Amex: /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  };

  for (const type in patterns) {
    if (patterns[type].test(cardNumber)) return type;
  }

  return null;
}

export function validateCard(cardNumber: string) {
  const type = detectCardType(cardNumber);
  const valid = luhnCheck(cardNumber);

  return { valid, type };
}

// module.exports = { detectCardType, validateCard };