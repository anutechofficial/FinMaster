/**
 * @class FinMaster
 */
export declare class FinMaster {
  /**
   * Present Value (PV)
   * PV, one of the financial functions, calculates the present value of a loan or an investment, based on a constant interest rate. You can use PV with either periodic, constant payments (such as a mortgage or other loan), or a future value that's your investment goal.
   * @param rate  Required. The interest rate per period. For example, if you obtain an automobile loan at a 10 percent annual interest rate and make monthly payments, your interest rate per month is 10%/12, or 0.83%. You would enter 10%/12, or 0.83%, or 0.0083, into the formula as the rate
   * @param nper  Required. The total number of payment periods in an annuity. For example, if you get a four-year car loan and make monthly payments, your loan has 4*12 (or 48) periods. You would enter 48 into the formula for nper
   * @param pmt Required. The payment made each period and cannot change over the life of the annuity. Typically, pmt includes principal and interest but no other fees or taxes. For example, the monthly payments on a $10,000, four-year car loan at 12 percent are $263.33. You would enter -263.33 into the formula as the pmt. If pmt is omitted, you must include the fv argument
   * @param fv
   * @param type
   */
  public calculatePV(
    rate: number,
    nper: number,
    pmt: number,
    fv?: number,
    type?: 0 | 1
  ): number;
  /**
   * Future Value (FV)
   * Calculates the future value of an investment
   * @param rate  Required. The interest rate for the loan.
   * @param nper  Required. The total number of payments for the loan.
   * @param pmt   Required. The present value, or the total amount that a series of future payments is worth now; also known as the principal.
   * @param fv    Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
   * @param type  Optional. The number 0 (zero) or 1 and indicates when payments are due.
   */
  public calculateFV(
    rate: number,
    nper: number,
    pmt: number,
    fv?: number,
    type?: 0 | 1
  ): number;
  /**
   * Payment (PMT)
   * PMT, one of the financial functions, calculates the payment for a loan based on constant payments and a constant interest rate.
   * @param rate  Required. The interest rate for the loan.
   * @param nper  Required. The total number of payments for the loan.
   * @param pv   Required. The present value, or the total amount that a series of future payments is worth now; also known as the principal.
   * @param fv    Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
   * @param type  Optional. The number 0 (zero) or 1 and indicates when payments are due.

   */
  public calculatePMT(
    rate: number,
    nper: number,
    pv: number,
    fv?: number,
    type?: 0 | 1
  ): number;
}

declare module 'finmaster' {
  export = FinMaster;
  export as namespace FinMaster;
}