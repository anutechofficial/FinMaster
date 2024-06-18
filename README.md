# FinMaster

`FinMaster` is a comprehensive financial calculation library for Node.js, providing functions to calculate Present Value (PV), Future Value (FV), Payment (PMT), Interest Payment (IPMT), Net Present Value (NPV), Internal Rate of Return (IRR), and Rate (RATE).
Some Functions are in Under Development 🚧 please go through with this Documentation..

## Table of Contents

- [FinMaster](#finmaster)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [CommonJS (Node.js)](#commonjs-nodejs)
    - [ES6 Modules](#es6-modules)
    - [TypeScript](#typescript)
  - [Functions](#functions)
    - [PV (Present Value)](#pv-present-value)
      - [Example Usage](#example-usage)
      - [Tips for Using PV Function](#tips-for-using-pv-function)
      - [Practical Example](#practical-example)
    - [FV (Future Value)](#fv-future-value)
      - [Example Usage](#example-usage-1)
      - [Tips for Using FV Function](#tips-for-using-fv-function)
      - [Practical Example](#practical-example-1)
    - [PMT (Payment)](#pmt-payment)
      - [Example Usage](#example-usage-2)
      - [Tips for Using PMT Function](#tips-for-using-pmt-function)
      - [Practical Example](#practical-example-2)
    - [IPMT (Interest Payment) ~ Under Development 🚧](#ipmt-interest-payment--under-development-)
    - [NPV (Net Present Value) ~ Under Development 🚧](#npv-net-present-value--under-development-)
    - [IRR (Internal Rate of Return) ~ Under Development 🚧](#irr-internal-rate-of-return--under-development-)
    - [RATE ~ Under Development 🚧](#rate--under-development-)
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
const FinMaster = require("finmaster");
const finMaster = new FinMaster();

let pv = finMaster.PV(0.05, 10, 1000);
console.log("Present Value:", pv);
```

### ES6 Modules

If you are using ES6 modules (recommended for newer Node.js projects or with TypeScript):

```bash
npm install finmaster
```

Import `FinMaster` into your project:

```javascript
import FinMaster from "finmaster";

const finMaster = new FinMaster();

let pv = finMaster.PV(0.05, 10, 1000);
console.log("Present Value:", pv);
```

### TypeScript

For TypeScript users, ensure you have typings installed:

```bash
npm install finmaster
```

Then, import and use `FinMaster`:

```typescript
import { FinMaster } from "finmaster";

const finMaster = new FinMaster();

let pv = finMaster.PV(0.05, 10, 1000);
console.log("Present Value:", pv);
```

---

## Functions

### PV (Present Value)

The PV (Present Value) function is used to calculate the present value of an investment or loan based on a series of future payments. This is particularly useful in financial analysis to determine how much a series of future payments is worth in today's terms, given a specific interest rate.

```javascript
const pv = finMaster.PV(rate, nper, pmt, fv, type);
```

- **rate**: The interest rate for each period.
- **nper**: The number of periods over which the payment will be made.
- **pmt**: The payment made each period; it cannot change over the life of the annuity.
- **fv** (optional): The future value or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0.
- **type** (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.

#### Example Usage

Imagine you want to find out the present value of receiving $1,000 annually for 5 years with an annual interest rate of 5%.

1. **rate**: 5% (0.05)
2. **nper**: 5
3. **pmt**: -$1,000 (outflows are represented as negative values in Javascript financial functions)
4. **fv**: 0 (default, since we are not considering any future value)
5. **type**: 0 (default, since payments are made at the end of each period)

```javascript
const pv = finMaster.PV(0.05, 5, -1000);
```

This function returns approximately -$4329.48, meaning the present value of receiving $1,000 annually for 5 years at a 5% interest rate is about $4329.48 today.

#### Tips for Using PV Function

- **Consistent Periods**: Ensure the interest rate and the number of periods match. For example, if you have a monthly interest rate, the number of periods should also be in months.
- **Cash Flow Sign Convention**: Cash outflows (payments) are usually entered as negative numbers, and cash inflows (receipts) as positive numbers.
- **Future Value (fv)**: This is optional and only used if you are expecting a lump sum in addition to the periodic payments.
- **Type of Payment**: Specify whether payments are made at the beginning or end of the period. Most annuities assume end-of-period payments.

#### Practical Example

Suppose you are considering an investment that pays $500 per month for the next 3 years and the interest rate is 6% annually. You want to find out the present value of this investment.

1. **rate**: 6% annually, which is 0.5% per month (0.06/12)
2. **nper**: 3 years, which is 36 months (3\*12)
3. **pmt**: -$500
4. **fv**: 0
5. **type**: 0

The function in Javascript:

```javascript
const pv = finMaster.PV(0.005, 36, -500);
```

This function will give you the present value of the investment based on the specified parameters.

By understanding and using the PV function, you can make more informed financial decisions by comparing the value of different investments or loans.

### FV (Future Value)

The FV (Future Value) function is used to calculate the future value of an investment based on periodic, constant payments and a constant interest rate. This function helps in determining how much an investment will grow over time.

```javascript
const fv = finMaster.FV(rate, nper, pmt, pv, type);
```

- **rate**: The interest rate for each period.
- **nper**: The total number of payment periods in the investment.
- **pmt**: The payment made each period; it cannot change over the life of the investment.
- **pv** (optional): The present value or initial amount of the investment. If omitted, it defaults to 0.
- **type** (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.

#### Example Usage

Imagine you want to find out the future value of saving $200 monthly for 5 years with an annual interest rate of 5%.

1. **rate**: 5% annually (0.05/12 = 0.004167 monthly)
2. **nper**: 5 years (5\*12 = 60 months)
3. **pmt**: -$200 (outflows are represented as negative values in Javascript financial functions)
4. **pv**: 0 (default, since you are starting with zero initial investment)
5. **type**: 0 (default, since payments are made at the end of each period)

The formula in Javascript would look like this:

```javascript
const fv = finMaster.FV(0.004167, 60, -200);
```

This function returns approximately $13,243.44, meaning the future value of saving $200 monthly for 5 years at a 5% annual interest rate is about $13,243.44.

#### Tips for Using FV Function

- **Consistent Periods**: Ensure the interest rate and the number of periods match. For example, if you have a monthly interest rate, the number of periods should also be in months.
- **Cash Flow Sign Convention**: Payments (cash outflows) are usually entered as negative numbers, and cash inflows are entered as positive numbers.
- **Present Value (pv)**: If there is an initial investment, include it; otherwise, it defaults to 0.
- **Type of Payment**: Specify whether payments are made at the beginning or end of the period. Most annuities assume end-of-period payments.

#### Practical Example

Suppose you are planning to save $500 monthly for 10 years in an investment account that offers a 6% annual interest rate compounded monthly. You want to find out how much you will have at the end of the 10 years.

1. **rate**: 6% annually, which is 0.5% per month (0.06/12)
2. **nper**: 10 years, which is 120 months (10\*12)
3. **pmt**: -$500
4. **pv**: 0 (since you are starting with zero initial investment)
5. **type**: 0 (since deposits are made at the end of each period)

The function in Javascript:

```javascript
const fv = finMaster.FV(0.005, 120, -500);
```

This function will give you the future value of the investment based on the specified parameters.

By understanding and using the FV function, you can plan for future financial goals, such as saving for retirement, a down payment on a house, or other long-term objectives.

### PMT (Payment)

The PMT function is used to calculate the payment for a loan based on constant payments and a constant interest rate. This function is helpful in determining the regular payment amount needed to pay off a loan or an investment over a specified period.

```javascript
const pmt = finMaster.PMT(rate, nper, pv, fv, type);
```

- **rate**: The interest rate for each period.
- **nper**: The total number of payment periods in the loan or investment.
- **pv**: The present value, or the total amount that a series of future payments is worth now; the principal of the loan.
- **fv** (optional): The future value or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0.
- **type** (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.

#### Example Usage

Imagine you take out a loan of $10,000 to be paid back over 5 years with an annual interest rate of 6%.

1. **rate**: 6% annually (0.06/12 = 0.005 monthly)
2. **nper**: 5 years (5\*12 = 60 months)
3. **pv**: $10,000
4. **fv**: 0 (default, since we are not considering any future value)
5. **type**: 0 (default, since payments are made at the end of each period)

```javascript
const pmt = finMaster.PMT(0.005, 60, 10000);
```

This function returns approximately -$193.33, meaning the monthly payment to pay off the $10,000 loan over 5 years at a 6% annual interest rate is about $193.33.

#### Tips for Using PMT Function

- **Consistent Periods**: Ensure the interest rate and the number of periods match. For example, if you have a monthly interest rate, the number of periods should also be in months.
- **Cash Flow Sign Convention**: The result of the PMT function will be negative if you are calculating loan payments because it represents an outflow. You can use the ABS function to get a positive result.
- **Future Value (fv)**: This is optional and only used if you are expecting a lump sum at the end of the payment periods.
- **Type of Payment**: Specify whether payments are made at the beginning or end of the period. Most loans assume end-of-period payments.

#### Practical Example

Suppose you are planning to save $15,000 over 3 years in an investment account that offers a 4% annual interest rate compounded monthly. You want to find out how much you need to deposit each month.

1. **rate**: 4% annually, which is 0.333% per month (0.04/12)
2. **nper**: 3 years, which is 36 months (3\*12)
3. **pv**: 0 (since you are starting with zero savings)
4. **fv**: $15,000
5. **type**: 0 (since deposits are made at the end of each period)

The function in Javascript:

```javascript
const pmt = finMaster.PMT(0.00333, 36, 0, 15000);
```

This function will give you the monthly payment amount needed to reach your savings goal based on the specified parameters.

By using the PMT function, you can plan and manage your loan repayments or savings deposits efficiently, ensuring that you meet your financial goals.

### IPMT (Interest Payment) ~ Under Development 🚧

Calculates the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.

```javascript
const ipmt = finMaster.IPMT(rate, per, nper, pv, fv, type);
```

- `rate`: The interest rate per period.
- `per`: The period for which the interest is calculated.
- `nper`: The number of periods.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

### NPV (Net Present Value) ~ Under Development 🚧

Calculates the net present value of a series of cash flows at a given discount rate.

```javascript
const npv = finMaster.NPV(rate, ...cashFlows);
```

- `rate`: The discount rate.
- `...cashFlows`: The series of cash flows.

### IRR (Internal Rate of Return) ~ Under Development 🚧

Calculates the internal rate of return for a series of cash flows.

```javascript
const irr = finMaster.IRR(...cashFlows);
```

- `...cashFlows`: The series of cash flows.

### RATE ~ Under Development 🚧

Calculates the interest rate per period of an annuity.

```javascript
const rate = finMaster.RATE(nper, pmt, pv, fv, type, guess);
```

- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).
- `guess`: Your guess for what the rate will be.

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
