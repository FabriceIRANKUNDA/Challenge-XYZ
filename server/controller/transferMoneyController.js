import TransferMoneyService from "../services/transferMoneyService";
import Response from "../utils/Response";
import catchAsyncErr from "../utils/catchAsyncError";
import AppError from "../utils/appError";
import HttpStatus from "http-status";

class TransferMoneyController {
  static transferMoney = catchAsyncErr(async (req, res, next) => {
    const response = await TransferMoneyService.performTransfer(req, res, next);

    if (response.status != 202) return next(new AppError(500, `${response}`));
    Response.successMessage(
      res,
      "Transfer performed successfully!",
      response,
      HttpStatus.OK
    );
  });
}

export default TransferMoneyController;
