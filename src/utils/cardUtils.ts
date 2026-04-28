// src/utils/cardUtils.ts

export type CardType =
  | "VISA"
  | "MASTERCARD"
  | "VERVE"
  | "AMEX"
  | "UNKNOWN";

export function detectCardType(cardNumber: string): CardType {
  const cleaned = cardNumber.replace(/\D/g, "");

  // VISA → starts with 4, length 13 or 16 or 19
  if (/^4\d{12}(\d{3})?(\d{3})?$/.test(cleaned)) {
    return "VISA";
  }

  // MASTERCARD → 51–55 or 2221–2720
  if (
    /^(5[1-5]\d{14})$/.test(cleaned) ||
    /^(2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/.test(cleaned)
  ) {
    return "MASTERCARD";
  }

  // VERVE (common in Nigeria)
  if (/^(506\d{13}|650\d{13}|5078\d{12}|5079\d{12})$/.test(cleaned)) {
    return "VERVE";
  }

  // AMEX → starts with 34 or 37 (15 digits)
  if (/^3[47]\d{13}$/.test(cleaned)) {
    return "AMEX";
  }

  return "UNKNOWN";
}