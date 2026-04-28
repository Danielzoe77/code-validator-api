Card Validator API

A lightweight and efficient Card Validation API built with Node.js, Express.js, and TypeScript.
It validates card numbers using the Luhn Algorithm, detects card types (Visa, MasterCard, Verve, Amex, etc.), and provides structured error handling for robust API responses.

📌 Features
✔ Validates card numbers using the Luhn Algorithm
✔ Detects Visa, MasterCard, Verve, AMEX, and other card types
✔ Ensures card number format (digits only, no spaces)
✔ Length validation (supports strict 16-digit requirement or card-type–based rules)
✔ Clean and modular architecture (Controllers, Services, Routes, Utils)
✔ Strict TypeScript configuration (strict: true)
✔ CommonJS module support
✔ Global error handling middleware
✔ Fully tested using Jest (unit + integration tests)
✔ Simple and developer-friendly API endpoint
🛠 Tech Stack
Layer	Technology
Runtime	Node.js
Backend Framework	Express.js
Language	TypeScript
Testing	Jest
Module System	CommonJS
Package Manager	npm
📁 Project Structure
card-validator/
│
├── src/
│   ├── controllers/
│   │   └── cardController.ts
│   ├── service/
│   │   └── cardService.ts
│   ├── utils/
│   │   ├── luhnUtils.ts
│   │   └── cardUtils.ts
│   ├── routes/
│   │   └── cardRoute.ts
│   ├── middleware/
│   │   └── errorMiddleware.ts
│   ├── app.ts
│   └── server.ts
│
├── tests/
│   └── cardValidator.test.ts
│
├── tsconfig.json
├── package.json
└── README.md
⚙️ Installation & Setup
1. Clone the project
git clone https://github.com/Danielzoe77/code-validator-api.git
cd card-validator
2. Install dependencies
npm install
3. Start development server
npm run dev

Server runs at:

http://localhost:4000
🔥 API Endpoint
Validate Card Number

POST /api/cards/validate

Request Body
{
  "cardNumber": "4539578763621486"
}
Response (Valid Visa Card)
{
  "valid": true,
  "type": "Visa"
}
Response (Invalid Card)
{
  "error": "Invalid card number"
}
Response (Bad Format)
{
  "error": "Invalid card details: only digits allowed"
}
🧠 Validation Logic

The API performs the following checks:

✔ Required field

cardNumber must be provided.

✔ Format validation
Must be a string
Must contain only digits
No spaces
Must be exactly 16 digits (or card-type–specific length)
✔ Luhn Algorithm

Industry standard checksum validation.

✔ Card Type Detection

Cards tested and supported:

Card Type	Example Tested
Visa	✔ Tested
MasterCard	✔ Tested
Verve	✔ Tested
AMEX	✔ Tested
Others	Marked as UNKNOWN

Cards like Verve (popular in Nigeria) are also supported.

🧪 Testing
Run tests:
npm test
Jest tests include:
Luhn algorithm test
Card type detection tests (Visa, MasterCard, Verve, AMEX)
Controller response tests
Error validation tests (spaces, letters, wrong length)
🧵 Sample Test Snippet
test("Valid MasterCard", () => {
  const result = validateCard("5204729305874610");
  expect(result.valid).toBe(true);
  expect(result.type).toBe("MasterCard");
});

test("Valid Verve Card", () => {
  const result = validateCard("5060990580000217499");
  expect(result.type).toBe("Verve");
});
🛑 Error Handling

All errors go through a central error handler:

Invalid format → 400
Missing card number → 400
Failed Luhn check → 400
Unknown card type → 400

Example:

{
  "error": "Invalid card details: card number must be exactly 16 digits"
}
📦 Build for Production
npm run build

Output goes to:

/dist

Run:

npm start