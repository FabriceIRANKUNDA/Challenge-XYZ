import { Router } from "express";
import DataChecker from "../middlewares/verifyData";
import TransferMoneyController from "../controller/transferMoneyController";

const router = Router();

router
  .route("/users/transfer")
  .post(DataChecker.isValidBody, TransferMoneyController.transferMoney);

export default router;
