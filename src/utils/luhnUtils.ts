/**
 * Utility function implementing the Luhn Algorithm.
 * This is the standard method banks use to validate card numbers.
 */
export function luhnCheck(value: string | undefined): boolean {
  if (!value) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value[i], 10);

    if (Number.isNaN(digit)) return false; // Non-digit character

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}