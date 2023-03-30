const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/react-shopping-cart";
function runDB() {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("Connection Done");
    });
}

module.exports = runDB;
