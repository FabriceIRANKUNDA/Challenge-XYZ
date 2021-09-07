class Response {
  static successMessage(res, message, data = null, status) {
    res.status(status).json(
      data
        ? {
            results: data.length,
            status: status,
            message,
            data: data,
          }
        : {
            status: status,
            message,
          }
    );
  }
}

export default Response;
