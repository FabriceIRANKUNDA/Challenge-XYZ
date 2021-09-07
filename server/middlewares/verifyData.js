import HttpStatus from "http-status";

class DataChecker {
  static isValidBody = (req, res, next) => {
    const { amount, userId } = req.body;
    if (!amount || !userId) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: "fail",
        message: "Please provide transaction Data!",
      });
    } else {
      next();
    }
  };
}

export default DataChecker;
