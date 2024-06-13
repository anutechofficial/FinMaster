# FinMaster

## Under Development 🚧

Will be Published with New Version Within a Week - Stay Tuned

`FinMaster` is a comprehensive financial calculation library for Node.js, providing functions to calculate Present Value (PV), Future Value (FV), Payment (PMT), Interest Payment (IPMT), Net Present Value (NPV), Internal Rate of Return (IRR), and Rate (RATE).

## Table of Contents

- [FinMaster](#finmaster)
  - [Under Development 🚧](#under-development-)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [CommonJS (Node.js)](#commonjs-nodejs)
    - [ES6 Modules](#es6-modules)
    - [TypeScript](#typescript)
    - [Functions](#functions)
      - [PV (Present Value)](#pv-present-value)
      - [FV (Future Value)](#fv-future-value)
      - [PMT (Payment)](#pmt-payment)
      - [IPMT (Interest Payment)](#ipmt-interest-payment)
      - [NPV (Net Present Value)](#npv-net-present-value)
      - [IRR (Internal Rate of Return)](#irr-internal-rate-of-return)
      - [RATE](#rate)
  - [Examples](#examples)
    - [Example Usage](#example-usage)
  - [Advance Functions](#advance-functions)
    - [Get Remaining Loan Term's](#get-remaining-loan-terms)
      - [Function Signature](#function-signature)
      - [Parameters](#parameters)
      - [Returns](#returns)
      - [Throws](#throws)
      - [Example](#example)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install `FinMaster`, use npm:

```bash
npm install finmaster
```

---

## Usage

### CommonJS (Node.js)

First, install `FinMaster` from npm:

```bash
npm install finmaster
```

Then, import `FinMaster` into your project:

```javascript
const FinMaster = require('finmaster');
const finMaster = new FinMaster();

let pv = finMaster.calculatePV(0.05, 10, 1000);
console.log('Present Value:', pv);
```

### ES6 Modules

If you are using ES6 modules (recommended for newer Node.js projects or with TypeScript):

```bash
npm install finmaster
```

Import `FinMaster` into your project:

```javascript
import FinMaster from 'finmaster';

const finMaster = new FinMaster();

let pv = finMaster.calculatePV(0.05, 10, 1000);
console.log('Present Value:', pv);
```

### TypeScript

For TypeScript users, ensure you have typings installed:

```bash
npm install --save-dev @types/finmaster
```

Then, import and use `FinMaster`:

```typescript
import { FinMaster } from 'finmaster';

const finMaster = new FinMaster();

let pv = finMaster.calculatePV(0.05, 10, 1000);
console.log('Present Value:', pv);
```

---

### Functions

#### PV (Present Value)

Calculates the present value of an investment.

```javascript
const pv = finMaster.calculatePV(rate, nper, pmt, fv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### FV (Future Value)

Calculates the future value of an investment.

```javascript
const fv = finMaster.calculateFV(rate, nper, pmt, pv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `pv`: The present value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### PMT (Payment)

Calculates the payment for a loan based on constant payments and a constant interest rate.

```javascript
const pmt = finMaster.calculatePMT(rate, nper, pv, fv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### IPMT (Interest Payment)

Calculates the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.

```javascript
const ipmt = finMaster.calculateIPMT(rate, per, nper, pv, fv, type);
```

- `rate`: The interest rate per period.
- `per`: The period for which the interest is calculated.
- `nper`: The number of periods.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### NPV (Net Present Value)

Calculates the net present value of a series of cash flows at a given discount rate.

```javascript
const npv = finMaster.calculateNPV(rate, ...cashFlows);
```

- `rate`: The discount rate.
- `...cashFlows`: The series of cash flows.

#### IRR (Internal Rate of Return)

Calculates the internal rate of return for a series of cash flows.

```javascript
const irr = finMaster.calculateIRR(...cashFlows);
```

- `...cashFlows`: The series of cash flows.

#### RATE

Calculates the interest rate per period of an annuity.

```javascript
const rate = finMaster.calculateRATE(nper, pmt, pv, fv, type, guess);
```

- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).
- `guess`: Your guess for what the rate will be.

## Examples

### Example Usage

```javascript
const FinMaster = require("finmaster");

const finMaster = new FinMaster();

// Calculate Present Value
const pv = finMaster.calculatePV(0.05 / 12, 12 * 10, -100, 1000, 0);
console.log(`Present Value: ${pv}`);

// Calculate Future Value
const fv = finMaster.calculateFV(0.05 / 12, 12 * 10, -100, 0, 0);
console.log(`Future Value: ${fv}`);

// Calculate Payment
const pmt = finMaster.calculatePMT(0.05 / 12, 12 * 10, 1000, 0, 0);
console.log(`Payment: ${pmt}`);

// Calculate Interest Payment
const ipmt = finMaster.calculateIPMT(0.05 / 12, 1, 12 * 10, 1000, 0, 0);
console.log(`Interest Payment: ${ipmt}`);

// Calculate Net Present Value
const npv = finMaster.calculateNPV(0.05, -100, 30, 40, 50, 60);
console.log(`Net Present Value: ${npv}`);

// Calculate Internal Rate of Return
const irr = finMaster.calculateIRR(-100, 30, 40, 50, 60);
console.log(`Internal Rate of Return: ${irr}`);

// Calculate Rate
const rate = finMaster.calculateRATE(12 * 10, -100, 1000, 0, 0);
console.log(`Rate: ${rate}`);
```

## Advance Functions

### Get Remaining Loan Term's

The `getRemainingLoanTerm` function calculates the remaining term of a loan given its start date, term length, and term unit. This is useful for determining how much time is left before a loan is fully paid off.

#### Function Signature

```typescript
/**
 * Calculates the remaining loan term in months.
 * @param startDateStr - The start date of the loan in the format "MM YYYY", "MMM YYYY".
 * @param loanTerm - The length of the loan term (either in years or months).
 * @param loanTermUnit - The unit of the loan term ("Years" or "Months").
 * @returns The remaining loan term in months, or 0 if the loan is already paid off.
 * @throws Will throw an error if the loan term unit is invalid.
 */
declare function getRemainingLoanTerm(
  startDateStr: string,
  loanTerm: number,
  loanTermUnit: "Years" | "Months"
): number;
```

#### Parameters

- `startDateStr` (string): The start date of the loan in the format "MM YYYY" ("06 2020"), "MMM YYYY" ("Jun 2020).
- `loanTerm` (number): The length of the loan term (either in years or months).
- `loanTermUnit` ("Years" | "Months"): The unit of the loan term ("Years" or "Months").

#### Returns

- `number`: The remaining loan term in months, or 0 if the loan is already paid off.

#### Throws

- Will throw an error if the loan term unit is invalid.

#### Example

Here is an example of how to use the `getRemainingLoanTerm` function:

```javascript
// Assuming the function is imported or available in your project
const remainingTerm = finMaster.getRemainingLoanTerm("06 2020", 5, "Years");
console.log(`Remaining loan term: ${remainingTerm} months`);
```

This function is especially useful for financial applications where users need to track the duration of their loans and understand how much time remains before they are paid off.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
