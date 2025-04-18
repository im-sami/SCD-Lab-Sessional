const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SCD-Lab-Sessional");

const app = express();
const port = 3004;

const Customer = mongoose.model("Customer", {
  name: String,
  points: Number,
});

app.post("/customer/:name/", (req, res) => {
  req.params.points = 0;
  const customer = new Customer(req.params);
  customer
    .save()
    .then(() => console.log("Customer created " + JSON.stringify(req.params)));
  res.send(JSON.stringify(req.params));
});

app.get("/customer/:name", async (req, res) => {
  const customer = await Customer.findOne(req.params);
  res.send(JSON.stringify(customer));
});

app.put("/customer/update-points/:name/:amount", async (req, res) => {
  const customer = await Customer.findOne({ name: req.params.name });

  await Customer.findOneAndUpdate(
    { name: req.params.name },
    { points: parseInt(customer.points) + parseInt(request.params.amount) }
  );

  res.send(JSON.stringify(customer));
});

app.listen(port, () => {
  console.log(`Customer Service listening on port ${port}`);
});
