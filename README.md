# FinMaster

`FinMaster` is a comprehensive financial calculation library for Node.js, providing functions to calculate Present Value (PV), Future Value (FV), Payment (PMT), Interest Payment (IPMT), Net Present Value (NPV), Internal Rate of Return (IRR), and Rate (RATE).

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
      - [FV (Future Value)](#fv-future-value)
      - [PMT (Payment)](#pmt-payment)
      - [IPMT (Interest Payment)](#ipmt-interest-payment)
      - [NPV (Net Present Value)](#npv-net-present-value)
      - [IRR (Internal Rate of Return)](#irr-internal-rate-of-return)
      - [RATE](#rate)
  - [Examples](#examples)
    - [Example Usage](#example-usage)
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
const pv = FinMaster.calculatePV(rate, nper, pmt, fv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### FV (Future Value)

Calculates the future value of an investment.

```javascript
const fv = FinMaster.calculateFV(rate, nper, pmt, pv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pmt`: The payment made each period.
- `pv`: The present value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### PMT (Payment)

Calculates the payment for a loan based on constant payments and a constant interest rate.

```javascript
const pmt = FinMaster.calculatePMT(rate, nper, pv, fv, type);
```

- `rate`: The interest rate per period.
- `nper`: The number of periods.
- `pv`: The present value.
- `fv`: The future value.
- `type`: 0 (end of period) or 1 (beginning of period).

#### IPMT (Interest Payment)

Calculates the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.

```javascript
const ipmt = FinMaster.calculateIPMT(rate, per, nper, pv, fv, type);
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
const npv = FinMaster.calculateNPV(rate, ...cashFlows);
```

- `rate`: The discount rate.
- `...cashFlows`: The series of cash flows.

#### IRR (Internal Rate of Return)

Calculates the internal rate of return for a series of cash flows.

```javascript
const irr = FinMaster.calculateIRR(...cashFlows);
```

- `...cashFlows`: The series of cash flows.

#### RATE

Calculates the interest rate per period of an annuity.

```javascript
const rate = FinMaster.calculateRATE(nper, pmt, pv, fv, type, guess);
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

// Calculate Present Value
const pv = FinMaster.calculatePV(0.05 / 12, 12 * 10, -100, 1000, 0);
console.log(`Present Value: ${pv}`);

// Calculate Future Value
const fv = FinMaster.calculateFV(0.05 / 12, 12 * 10, -100, 0, 0);
console.log(`Future Value: ${fv}`);

// Calculate Payment
const pmt = FinMaster.calculatePMT(0.05 / 12, 12 * 10, 1000, 0, 0);
console.log(`Payment: ${pmt}`);

// Calculate Interest Payment
const ipmt = FinMaster.calculateIPMT(0.05 / 12, 1, 12 * 10, 1000, 0, 0);
console.log(`Interest Payment: ${ipmt}`);

// Calculate Net Present Value
const npv = FinMaster.calculateNPV(0.05, -100, 30, 40, 50, 60);
console.log(`Net Present Value: ${npv}`);

// Calculate Internal Rate of Return
const irr = FinMaster.calculateIRR(-100, 30, 40, 50, 60);
console.log(`Internal Rate of Return: ${irr}`);

// Calculate Rate
const rate = FinMaster.calculateRATE(12 * 10, -100, 1000, 0, 0);
console.log(`Rate: ${rate}`);
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
