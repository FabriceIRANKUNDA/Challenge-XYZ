import dotenv from "dotenv";
import app from "./index";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
