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


let Finmaster = function () {};

Finmaster.prototype.calculatePV = function (
  rate,
  nper,
  pmt,
  fv = 0,
  type = 0
) {
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

  return pv;
};

function calculatePMT(rate, nper, pv, fv = 0, type = 0) {
  const r = rate / 100 / 12; // Convert annual interest rate to monthly rate

  let pmt;
  if (r === 0) {
    pmt = -(pv + fv) / nper;
  } else {
    if (type === 0) {
      pmt = (pv * r) / (1 - Math.pow(1 + r, -nper));
    } else {
      pmt = (pv * r) / ((1 - Math.pow(1 + r, -nper)) / r);
    }
  }
  let pmti = +pmt.toFixed(2);

  return +Math.abs(pmti);
}

function getRemainingLoanTerm(startDateStr, loanTerm, loanTermUnit) {
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
