/**
 * @class FinMaster
 */
export declare class FinMaster {
  /**
   * Present Value (PV)
   * The PV (Present Value) function in Javascript is used to calculate the present value of an investment or loan based on a series of future payments.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param rate  Required. The interest rate for each period.
   * @param nper  Required. The number of periods over which the payment will be made.
   * @param pmt Required. The payment made each period; it cannot change over the life of the annuity.
   * @param fv  (optional): The future value or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0.
   * @param type  (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.
   */
  public PV(
    rate: number,
    nper: number,
    pmt: number,
    fv?: number,
    type?: 0 | 1
  ): number;

  /**
   * Future Value (FV)
   * The FV (Future Value) function in Javascript is used to calculate the future value of an investment based on periodic, constant payments and a constant interest rate.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param rate  Required. The interest rate for each period.
   * @param nper  Required. The total number of payment periods in the investment.
   * @param pmt Required. The payment made each period; it cannot change over the life of the investment.
   * @param pv  (optional): The present value or initial amount of the investment. If omitted, it defaults to 0.
   * @param type  (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.
   */
  public FV(
    rate: number,
    nper: number,
    pmt: number,
    pv?: number,
    type?: 0 | 1
  ): number;

  /**
   * Payment (PMT)
   * The PMT function in Javascript is used to calculate the payment for a loan based on constant payments and a constant interest rate.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param rate  Required. The interest rate for each period.
   * @param nper  Required. The total number of payment periods in the loan or investment.
   * @param pv  Required. The present value, or the total amount that a series of future payments is worth now; the principal of the loan.
   * @param fv  (optional): The future value or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0.
   * @param type  (optional): The timing of the payment. If omitted, it defaults to 0. Use 0 if payments are due at the end of the period and 1 if payments are due at the beginning of the period.
   */
  public PMT(
    rate: number,
    nper: number,
    pv: number,
    fv?: number,
    type?: 0 | 1
  ): number;

  /**
   * NPV (Net Present Value)
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * Calculates the Net Present Value (NPV) of a series of cash flows.
   * @param {number} rate - The discount rate.
   * @param {number[]} cashFlows - An array of cash flows.
   * @returns {number} The Net Present Value (NPV).
   */
  public NPV(rate: number, cashFlows: number[]): number;

  /**
   * IRR (Internal Rate of Return)
   * Calculates the Internal Rate of Return (IRR) for a series of cash flows.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param {number[]} cashFlows - An array of cash flows.
   * @param {number} [guess] - An initial guess for the IRR.
   * @returns {number} The Internal Rate of Return (IRR).
   * @throws {Error} If the IRR calculation does not converge.
   */
  public IRR(cashFlows: number[], guess?: number): number;

  /**
   * Calculates the interest rate per period of an annuity.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param {number} nper - The total number of payment periods in the annuity.
   * @param {number} pmt - The payment made each period; it cannot change over the life of the annuity.
   * @param {number} pv - The present value, or the total amount that a series of future payments is worth now.
   * @param {number} [fv=0] - The future value, or a cash balance you want to attain after the last payment is made. Default is 0.
   * @param {number} [type=0] - The number 0 (end of period) or 1 (beginning of period) indicating when payments are due. Default is 0.
   * @param {number} [guess=0.1] - Your guess for what the rate will be. Default is 0.1 (10%).
   * @returns {number} The interest rate per period.
   */
  public RATE(
    nper: number,
    pmt: number,
    pv: number,
    fv?: number,
    type?: number,
    guess?: number
  ): number;

  //Advance Functions

  /**
   * Calculates the remaining loan term in months.
   * For Detailed Description of this function follow Documentation (https://github.com/anutechofficial/FinMaster#readme)
   * @param startDateStr - The start date of the loan in the format "MM YYYY".
   * @param loanTerm - The length of the loan term (either in years or months).
   * @param loanTermUnit - The unit of the loan term ("Years" or "Months").
   * @returns The remaining loan term in months, or 0 if the loan is already paid off.
   * @throws Will throw an error if the loan term unit is invalid.
   */
  public getRemainingLoanTerm(
    startDateStr: string,
    loanTerm: number,
    loanTermUnit: "Years" | "Months"
  ): number;
}

declare module "finmaster" {
  export = FinMaster;
}
