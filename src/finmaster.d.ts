/**
 * @class finMaster
 */
export class Finmaster {
  /**
   * Present Value (PV)
   * The current worth of a future sum of money or stream of cash flows given a specified rate of return
   * @param rate
   * @param nper
   * @param pmt
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
}
