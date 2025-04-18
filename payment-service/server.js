const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SCD-Lab-Sessional");

const app = express();
const port = 3005;

const Payment = mongoose.model("Payment", {
  name: String,
  amount: Number,
});

app.post("/payment/:name/:amount/", async (req, res) => {
  const payment = new Payment(req.params);
  payment
    .save()
    .then(() => console.log("Payment created " + JSON.stringify(req.params)));
  res.send(JSON.stringify(req.params));
});

app.listen(port, () => {
  console.log(`Payment Service listening on port ${port}`);
});
