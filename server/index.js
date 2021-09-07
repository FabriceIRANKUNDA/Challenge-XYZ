import express from "express";
import cors from "cors";
import router from "./routes/transferRoute";
import globalErrorHandler from "./controller/errorController";
const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb", type: "application/json" }));
app.get("/", (req, res) => {
  return res.send("Server is ready");
});
app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.send("Oops, this route does not exist!");
});

app.use(globalErrorHandler);

export default app;
