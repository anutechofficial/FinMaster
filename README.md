# FinMaster

`FinMaster` is a comprehensive financial calculation library for Node.js, providing functions to calculate Present Value (PV), Future Value (FV), Payment (PMT), Net Present Value (NPV), Internal Rate of Return (IRR), Rate (RATE) and other Advance functions. 

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
      - [Example Usage FV](#example-usage-fv)
      - [Tips for Using FV Function](#tips-for-using-fv-function)
      - [Practical Example FV](#practical-example-fv)
    - [PMT (Payment)](#pmt-payment)
      - [Example Usage PMT](#example-usage-pmt)
      - [Tips for Using PMT Function](#tips-for-using-pmt-function)
      - [Practical Example PMT](#practical-example-pmt)
    - [NPV (Net Present Value)](#npv-net-present-value)
      - [Example Usage NPV](#example-usage-npv)
      - [Tips for Using NPV Function](#tips-for-using-npv-function)
      - [Practical Example NPV](#practical-example-npv)
    - [IRR (Internal Rate of Return)](#irr-internal-rate-of-return)
      - [Example Usage IRR](#example-usage-irr)
      - [Tips for Using IRR Function](#tips-for-using-irr-function)
      - [Practical Example IRR](#practical-example-irr)
    - [RATE](#rate)
      - [Example Usage RATE](#example-usage-rate)
      - [Tips for Using RATE Function](#tips-for-using-rate-function)
      - [Practical Example RATE](#practical-example-rate)
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

#### Example Usage FV

Imagine you want to find out the future value of saving $200 monthly for 5 years with an annual interest rate of 5%.

1. **rate**: 5% annually (0.05/12 = 0.004167 monthly)
2. **nper**: 5 years (5\*12 = 60 months)
3. **pmt**: -$200 (outflows are represented as negative values in Javascript financial functions)
4. **pv**: 0 (default, since you are starting with zero initial investment)
5. **type**: 0 (default, since payments are made at the end of each period)

The function in Javascript would look like this:

```javascript
const fv = finMaster.FV(0.004167, 60, -200);
```

This function returns approximately $13,243.44, meaning the future value of saving $200 monthly for 5 years at a 5% annual interest rate is about $13,243.44.

#### Tips for Using FV Function

- **Consistent Periods**: Ensure the interest rate and the number of periods match. For example, if you have a monthly interest rate, the number of periods should also be in months.
- **Cash Flow Sign Convention**: Payments (cash outflows) are usually entered as negative numbers, and cash inflows are entered as positive numbers.
- **Present Value (pv)**: If there is an initial investment, include it; otherwise, it defaults to 0.
- **Type of Payment**: Specify whether payments are made at the beginning or end of the period. Most annuities assume end-of-period payments.

#### Practical Example FV

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

#### Example Usage PMT

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

#### Practical Example PMT

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

### NPV (Net Present Value)

The NPV (Net Present Value) function is used to calculate the net present value of an investment based on a series of periodic cash flows and a discount rate. It is particularly useful for evaluating the profitability of an investment or project by determining the present value of future cash flows minus the initial investment.

```javascript
const npv = finMaster.NPV(rate, cashFlows);
```

- **rate**: The discount rate over one period.
- **value1, value2, ...**: 1 to 254 arguments representing the cash flows (payments and income). Cash outflows (payments) are negative values, and cash inflows (receipts) are positive values.

#### Example Usage NPV

Imagine you want to evaluate an investment that requires an initial investment of $10,000 and provides annual returns of $3,000, $4,000, $5,000, and $6,000 over the next four years. You want to calculate the NPV of these cash flows assuming a discount rate of 8%.

1. **rate**: 8% (0.08)
2. **value1**: $3,000 (cash inflow at the end of the first year)
3. **value2**: $4,000 (cash inflow at the end of the second year)
4. **value3**: $5,000 (cash inflow at the end of the third year)
5. **value4**: $6,000 (cash inflow at the end of the fourth year)

The initial investment of $10,000 should be subtracted from the result of the NPV function.

The function in Javascript would look like this:

```javascript
let rate = 0.08;
let cashFlow = [3000, 4000, 5000, 6000];
const npv = finMaster.NPV(rate, cashFlow) - 10000;
```

This function returns approximately $4,216.91, meaning the net present value of the investment, considering the initial $10,000 investment and the 8% discount rate, is about $4,216.91.

#### Tips for Using NPV Function

- **Consistent Periods**: Ensure the discount rate and the timing of cash flows match. For example, if you have an annual discount rate, the cash flows should also be annual.
- **Cash Flow Sign Convention**: Cash outflows (payments) are negative values, and cash inflows (receipts) are positive values.
- **Initial Investment**: Include the initial investment outside of the NPV function, as the function only evaluates future cash flows.
- **Discount Rate**: The discount rate reflects the cost of capital or the required rate of return.

#### Practical Example NPV

Suppose you are considering a project that requires an initial investment of $20,000 and will generate annual returns of $5,000, $7,000, $8,000, and $10,000 over the next four years. You want to calculate the NPV with a discount rate of 10%.

1. **rate**: 10% (0.10)
2. **value1**: $5,000 (cash inflow at the end of the first year)
3. **value2**: $7,000 (cash inflow at the end of the second year)
4. **value3**: $8,000 (cash inflow at the end of the third year)
5. **value4**: $10,000 (cash inflow at the end of the fourth year)

The initial investment of $20,000 should be subtracted from the result of the NPV function.

The function in Javascript:

```javascript
let rate = 0.1;
let cashFlow = [5000, 7000, 8000, 10000];
const npv = finMaster.NPV(rate, cashFlow) - 20000;
```

This function will give you the net present value of the project based on the specified parameters.

By understanding and using the NPV function, you can assess whether an investment or project will meet your financial goals and provide a satisfactory return, accounting for the time value of money.

### IRR (Internal Rate of Return)

The IRR (Internal Rate of Return) function is used to calculate the internal rate of return for a series of cash flows (both incoming and outgoing). The IRR is the discount rate that makes the net present value (NPV) of the cash flows equal to zero. It is commonly used to evaluate the profitability of investments or projects.

```javascript
let cashFlow = [100, 200, 300, 400];
let guess = 0.1; //Optional
const irr = finMaster.IRR(cashFlow, guess);
```

- **values**: An array or a range of cells that contains the series of cash flows. The series should include at least one negative value (representing an outflow) and one positive value (representing an inflow).
- **guess** (optional): A number that you guess is close to the result of IRR. If omitted, Excel uses 0.1 (10%) as the default guess.

#### Example Usage IRR

Imagine you are considering an investment that requires an initial investment of $10,000 and provides annual returns of $3,000, $4,000, $5,000, and $6,000 over the next four years. You want to calculate the IRR of these cash flows.

1. **values**: [-10000, 3000, 4000, 5000, 6000]
2. **guess**: (optional, we can omit this)

The function would look like this:

```javascript
let cashFlow = [-10000, 3000, 4000, 5000, 6000];
const irr = finMaster.IRR(cashFlow);
```

This function returns approximately 20.62%, meaning the internal rate of return for this series of cash flows is about 20.62%.

#### Tips for Using IRR Function

- **Consistent Cash Flow Periods**: Ensure that the cash flows occur at regular intervals (e.g., monthly, annually).
- **Include All Cash Flows**: The initial investment and all subsequent cash flows must be included in the series.
- **Cash Flow Sign Convention**: Typically, the initial investment (cash outflow) is negative, and subsequent returns (cash inflows) are positive.
- **Guess Parameter**: If the IRR function returns a #NUM! error, providing a different guess may help find a solution.

#### Practical Example IRR

Suppose you are considering a project that requires an initial investment of $20,000 and will generate annual returns of $5,000, $7,000, $8,000, and $10,000 over the next four years. You want to calculate the IRR for these cash flows.

1. **values**: [-20000, 5000, 7000, 8000, 10000]
2. **guess**: (optional, we can omit this)

The function in Javascript:

```javascript
let cashFlow = [-20000, 5000, 7000, 8000, 10000];
const irr = finMaster.IRR(cashFlow);
```

This function will give you the internal rate of return for the project based on the specified parameters.

### RATE

The RATE function is used to calculate the interest rate per period of an annuity. An annuity is a series of equal cash flows occurring at regular intervals. This function is helpful for determining the periodic interest rate required to pay off a loan or to reach a specific investment goal.

```javascript
const rate = finMaster.RATE(nper, pmt, pv, fv, type, guess);
```

- **nper**: The total number of payment periods.
- **pmt**: The payment made each period; it cannot change over the life of the annuity.
- **pv**: The present value, or the total amount that a series of future payments is worth now; the principal of the loan.
- **fv** (optional): The future value or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0.
- **type** (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.
- **guess** (optional): Your guess for what the rate will be. If omitted, Excel uses 0.1 (10%) as the default guess.

#### Example Usage RATE

Imagine you take out a loan of $10,000 to be paid back over 5 years with monthly payments of $200. You want to find out the monthly interest rate.

1. **nper**: 5 years (5 * 12 = 60 months)
2. **pmt**: -$200 (outflows are represented as negative values in Excel financial functions)
3. **pv**: $10,000
4. **fv**: 0 (default, since we are not considering any future value)
5. **type**: 0 (default, since payments are made at the end of each period)
6. **guess**: (optional, we can omit this)

The function would look like this:

```javascript
const rate = finMaster.RATE(60,-200,10000);
```

This function returns approximately 0.004867, meaning the monthly interest rate is about 0.4867%.

To convert this to an annual interest rate, you can multiply by 12:

```javascript
const rate = finMaster.RATE(60,-200,10000) * 12;
```

This gives an annual interest rate of approximately 5.84%.

#### Tips for Using RATE Function

- **Consistent Periods**: Ensure the number of periods and payments match the compounding periods (e.g., monthly payments for a monthly interest rate).
- **Cash Flow Sign Convention**: Cash outflows (payments) are usually entered as negative numbers, and cash inflows (receipts) as positive numbers.
- **Guess Parameter**: If the RATE function returns a #NUM! error or doesn't converge, providing a different guess may help find a solution.
- **Annual Rate Conversion**: If you get a monthly rate and need the annual rate, multiply the result by the number of periods per year.

#### Practical Example RATE

Suppose you are planning to save $500 monthly for 10 years to reach a future value of $100,000. You want to find out the monthly interest rate required to reach this goal.

1. **nper**: 10 years (10 * 12 = 120 months)
2. **pmt**: -$500
3. **pv**: 0 (since you are starting with zero initial investment)
4. **fv**: $100,000
5. **type**: 0 (since deposits are made at the end of each period)
6. **guess**: (optional, we can omit this)

The function in Javascript:

```javascript
const rate = finMaster.RATE(120, -500, 0, 100000);
```

This function will give you the monthly interest rate needed to achieve the future value of $100,000 based on the specified parameters.

By understanding and using the RATE function, you can determine the periodic interest rate required for various financial scenarios, such as loan repayments or investment growth, ensuring you meet your financial goals effectively.

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
