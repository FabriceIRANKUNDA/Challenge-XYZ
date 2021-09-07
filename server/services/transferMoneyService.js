import PaymentHandler from "../helper/handlerPayment";
import catchAsyncError from "../utils/catchAsyncError";
import AppError from "../utils/appError";
import { v4 as uuidV4 } from "uuid";

class TransferMoneyService {
  /**
   * Post request to transfer Money Using MoMo API
   * @static
   * @param {object} req  request object
   * @memberof AlbumService
   * @returns {object} data
   */

  static performTransferHelper = async (data, next) => {
    try {
      const { amount, userId } = data;
      const paymentInit = new PaymentHandler();
      const response = await paymentInit.requestToken();

      if (!response.data)
        next(new AppError(500, "Login to MTN server failed, try again later"));
      const { access_token } = response.data;
      const uuid = uuidV4();

      const result = await paymentInit.requestToPay(
        access_token,
        uuid,
        amount,
        userId
      );
      result.uuid = uuid;
      result.access_token = access_token;
      return result;
    } catch (err) {
      next(err);
    }
  };

  static performTransfer = async (req, res, next) => {
    const { amount, userId } = req.body;
    try {
      const result = await this.performTransferHelper({ amount, userId }, next);
      return result;
    } catch (err) {
      next(err);
    }
  };
}

export default TransferMoneyService;
