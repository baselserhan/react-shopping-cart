const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const runDB = require("./config/db");

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use("/", productRouter);
app.use("/", orderRouter);

// Run DB
runDB();

app.listen(5001, () => {
  console.log("Running on port 5001");
});
