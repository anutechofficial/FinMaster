/**
 * @class FinMaster
 */
export declare class FinMaster {
  /**
   * Present Value (PV)
   * The PV (Present Value) function in Javascript is used to calculate the present value of an investment or loan based on a series of future payments.
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
   * Calculates the remaining loan term in months.
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
