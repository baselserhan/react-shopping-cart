const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use("/", router);

const connectionString = "mongodb://localhost/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connection Done");
  });

app.listen(5001, () => {
  console.log("Running on port 5001");
});
