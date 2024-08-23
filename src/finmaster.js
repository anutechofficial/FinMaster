/*!
 * MIT License
 *
 * Copyright (c) 2024 Anurag Yadav
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class FinMaster {
  //PV
  PV(rate, nper, pmt, fv = 0, type = 0) {
    let pv = 0;

    // Calculate discount factor
    let discountFactor = Math.pow(1 + rate, -nper);

    // Calculate present value of payments
    for (let i = 1; i <= nper; i++) {
      pv += pmt / Math.pow(1 + rate, i);
    }

    // Add present value of future cash flow
    pv += fv * discountFactor;

    // Adjust for payment timing
    if (type === 1) {
      pv /= 1 + rate;
    }

    return -pv;
  }

  //FV
  FV(rate, nper, pmt, pv = 0, type = 0) {
    let fv = 0;

    // Calculate discount factor
    let discountFactor = Math.pow(1 + rate, nper);

    // Calculate future value of payments
    for (let i = 1; i <= nper; i++) {
      fv += pmt * Math.pow(1 + rate, nper - i);
    }

    // Add future value of present cash flow
    fv += pv * discountFactor;

    // Adjust for payment timing
    if (type === 1) {
      fv *= 1 + rate;
    }

    return -fv;
  }

  //PMT
  PMT(rate, nper, pv, fv = 0, type = 0) {
    const r = rate;

    let pmt;
    if (r === 0) {
      pmt = (pv + fv) / nper;
    } else {
      if (type === 0) {
        pmt = (pv * r) / (1 - Math.pow(1 + r, -nper));
      } else {
        pmt = (pv * r) / ((1 - Math.pow(1 + r, -nper)) / r);
      }
    }

    return -pmt;
  }

  //NPV
  NPV(rate, cashFlows) {
    let npv = 0;

    for (let i = 0; i < cashFlows.length; i++) {
      npv += cashFlows[i] / Math.pow(1 + rate, i + 1);
    }

    return npv;
  }

  // IRR
  IRR(cashFlows, guess = 0.1) {
    const maxIterations = 1000;
    const tolerance = 1e-7;
    let rate = guess;

    const npv = (rate) => {
      return cashFlows.reduce((acc, cashFlow, i) => {
        return acc + cashFlow / Math.pow(1 + rate, i);
      }, 0);
    };

    const npvDerivative = (rate) => {
      return cashFlows.reduce((acc, cashFlow, i) => {
        return acc - (i * cashFlow) / Math.pow(1 + rate, i + 1);
      }, 0);
    };

    for (let i = 0; i < maxIterations; i++) {
      const npvValue = npv(rate);
      const npvDerivativeValue = npvDerivative(rate);

      if (Math.abs(npvValue) < tolerance) {
        return rate;
      }

      rate = rate - npvValue / npvDerivativeValue;
    }

    throw new Error("IRR calculation did not converge");
  }

  //RATE
  RATE(nper, pmt, pv, fv = 0, type = 0, guess = 0.1) {
    const maxIterations = 100;
    const tolerance = 1e-7;
    let rate = guess;

    const f = (rate) => {
      if (rate === 0) {
        return pv + pmt * nper + fv;
      } else {
        return (
          pv * Math.pow(1 + rate, nper) +
          (pmt * (1 + rate * type) * (Math.pow(1 + rate, nper) - 1)) / rate +
          fv
        );
      }
    };

    const fDerivative = (rate) => {
      if (rate === 0) {
        return -pmt * nper - fv;
      } else {
        const t1 = Math.pow(1 + rate, nper);
        const t2 = Math.pow(1 + rate, nper - 1);
        return (
          pv * nper * t2 +
          (pmt * (1 + rate * type) * (t1 - 1)) / Math.pow(rate, 2) -
          (pmt * nper * t1) / rate +
          (pmt * type * t1) / rate
        );
      }
    };

    for (let i = 0; i < maxIterations; i++) {
      const y = f(rate);
      const yDerivative = fDerivative(rate);

      if (Math.abs(y) < tolerance) {
        return rate;
      }

      rate = rate - y / yDerivative;
    }

    throw new Error("RATE calculation did not converge");
  }

  //Advance

  //getRemainingLoanTerm
  getRemainingLoanTerm(startDateStr, loanTerm, loanTermUnit) {
    // Parse the start date
    const [startMonth, startYear] = startDateStr.split(" ");
    const startDate = new Date(`${startYear}-${startMonth}-01`);

    // Convert loan term to months
    let totalLoanTermInMonths;
    if (loanTermUnit == "Years") {
      totalLoanTermInMonths = loanTerm * 12;
    } else if (loanTermUnit == "Months") {
      totalLoanTermInMonths = loanTerm;
    } else {
      throw new Error("Invalid loan term unit");
    }

    // Calculate the number of months that have passed since the start date
    const now = new Date();
    const monthsPassed =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    // Calculate the remaining loan term
    const remainingLoanTerm = totalLoanTermInMonths - monthsPassed;

    return remainingLoanTerm > 0 ? remainingLoanTerm : 0; // If the loan is already paid off, return 0
  }

  //Upcoming Functions
}

// // CommonJS and ES module compatibility
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//     module.exports = FinMaster;
//     module.exports.default = FinMaster; // For ES module default import
//     module.exports.FinMaster = FinMaster; // Named export
// } else {
//     // For global usage in browser
//     window.FinMaster = FinMaster;
// }

module.exports = FinMaster;
module.exports.default = FinMaster;
module.exports.FinMaster = FinMaster;
